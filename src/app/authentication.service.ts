import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { from, Observable, of} from 'rxjs';
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
          const userData = {
            uid: user.uid,
            email,
            fullName,
            contact,
            role: 'student',
            department,
          };
          
          return this.firestore.collection('users').doc(user.uid).set(userData)
            .then(() => {
              // Create an entry in `userStatus` collection for tracking online status
              return this.firestore.collection('userStatus').doc(user.uid).set({
                uid: user.uid,
                online: false,
                lastActive: new Date()
              }).then(() => userData); // Return userData after both writes
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
  loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          this.updateUserStatus(user.uid, true); // Set online status on login
        }
        return userCredential;
      });
  }
  updateUserStatus(userId: string, online: boolean): Promise<void> {
    return this.firestore.collection('userStatus').doc(userId).set({
      uid: userId,
      online: online,
      lastActive: new Date()
    }, { merge: true }); // `merge: true` ensures existing fields aren’t overwritten
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
    return this.afAuth.currentUser.then(user => {
      if (user) {
        this.updateUserStatus(user.uid, false); // Set user offline on logout
      }
      return this.afAuth.signOut();
    });
  }
  

  getUserData$(): Observable<any> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        console.log('Auth state user:', user); // Log the auth state
  
        if (user) {
          return this.firestore.doc(`users/${user.uid}`).valueChanges().pipe(
            map(userData => {
              console.log('User data from Firestore:', userData); // Log retrieved user data
              return userData;
            })
          );
        } else {
          console.warn('No authenticated user'); // Log if no user is authenticated
          return of(null);
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

  async getCurrentUserId(): Promise<string | null> {
    const user = await this.afAuth.currentUser;
    return user ? user.uid : null;
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
   // Method to get the user ID from Firebase Authentication
   getUserId(): Observable<string | null> {
    return this.afAuth.authState.pipe(
      switchMap(user => (user ? of(user.uid) : of(null)))
    );
  }

  // Method to get the user’s full name from Firestore
getUserName(): Observable<string | null> {
  return this.getUserId().pipe(
      switchMap(userId => {
          if (userId) {
              return this.firestore.collection('users').doc(userId).valueChanges().pipe(
                  map((userData: any) => userData?.fullName ?? null) // Change to `fullName`
              );
          }
          return of(null);
      })
  );
}

// Method to get the user's department from Firestore
getUserDepartment(): Observable<string | null> {
  return this.getUserId().pipe(
      switchMap(userId => {
          if (userId) {
              console.log("User ID in getUserDepartment:", userId);
              return this.firestore.collection('users').doc(userId).valueChanges().pipe(
                  map((userData: any) => {
                      console.log("User data from Firestore:", userData); // Log entire document
                      return userData?.department ?? null;
                  })
              );
          }
          return of(null);
      })
  );
}


}
