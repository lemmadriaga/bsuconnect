import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { from, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

interface UserData {
  uid: string;
  email: string;
  fullName: string;
  contact: string;
  role: string;
  profilePictureUrl?: string;
  department?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  // Register a new user
  registerUser(
    email: string,
    password: string,
    fullName: string,
    contact: string,
    department: string
  ): Promise<any> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          return this.firestore.collection('users').doc(user.uid).set({
            uid: user.uid,
            email,
            fullName,
            contact,
            role: 'student',
            department,
          }).then(() => {
            // Return user data after successful Firestore write
            return {
              uid: user.uid,
              email,
              fullName,
              contact,
              role: 'student',
              department,
            };
          });
        } else {
          throw new Error('User creation failed');
        }
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        throw error;
      });
  }

  // Sign in existing user
  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Google sign-in
  googleSignIn(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  // Get user role
  getUserRole$(): Observable<string | null> {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.firestore
            .collection('users')
            .doc(user.uid)
            .get()
            .pipe(
              map((doc) => {
                const data = doc.data() as UserData; // Cast to UserData
                return data ? data.role : null; // Access role directly
              })
            );
        } else {
          return from([null]);
        }
      })
    );
  }

  // Reset password
  resetPassword(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  // Sign out
  logoutUser(): Promise<void> {
    return this.afAuth.signOut();
  }

  getUserData$(): Observable<UserData | null> {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.firestore
            .collection('users')
            .doc(user.uid)
            .valueChanges()
            .pipe(map((data) => data as UserData));
        } else {
          return from([null]);
        }
      })
    );
  }

  uploadProfilePicture(userId: string, file: File): Observable<string> {
    const filePath = `profile_pictures/${userId}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    return from(task).pipe(
      switchMap(() => fileRef.getDownloadURL()),
      tap((url) => {
        this.firestore.collection('users').doc(userId).update({
          profilePictureUrl: url,
        });
      })
    );
  }

  getCurrentUserId(): Promise<string | null> {
    return this.afAuth.currentUser.then((user) => (user ? user.uid : null));
  }
  
  getTotalUserCount(): Observable<number> {
    return this.firestore
      .collection('users')
      .get()
      .pipe(
        map((snapshot) => snapshot.size) // `snapshot.size` gives the total number of documents
      );
  }

  updateUserProfile(userId: string, profileData: Partial<UserData>): Promise<void> {
    return this.firestore.collection('users').doc(userId).update(profileData);
  }
  
  getUserDepartmentCounts(): Observable<{ [department: string]: number }> {
    return this.firestore.collection('users').valueChanges().pipe(
      map((users: any[]) => {
        return users.reduce((acc, user) => {
          const department = user.department || 'Unknown'; // Handle missing departments
          acc[department] = (acc[department] || 0) + 1;
          return acc;
        }, {} as { [department: string]: number });
      })
    );
  }
  
}
