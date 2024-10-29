// admin.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private firestore: AngularFirestore) {}

  getTotalUsers(): Observable<number> {
    return this.firestore
      .collection('users')
      .valueChanges()
      .pipe(map((users) => users.length));
  }

  getUsersByMonth(): Observable<any[]> {
    return this.firestore
      .collection('users', (ref) => ref.orderBy('createdAt', 'asc'))
      .valueChanges()
      .pipe(
        map((users) => {
          // Process users to get monthly counts
          // Implementation depends on your data structure
          return this.processUsersByMonth(users);
        })
      );
  }

  getUsersByDepartment(): Observable<any[]> {
    return this.firestore
      .collection('users')
      .valueChanges()
      .pipe(
        map((users) => {
          // Process users to get department distribution
          // Implementation depends on your data structure
          return this.processUsersByDepartment(users);
        })
      );
  }

  private processUsersByMonth(users: any[]): any[] {
    // Implementation to process users into monthly data
    // This will depend on your specific data structure
    return [];
  }

  private processUsersByDepartment(users: any[]): any[] {
    // Implementation to process users into department data
    // This will depend on your specific data structure
    return [];
  }

  getPendingPosts(): Observable<any[]> {
    return this.firestore
      .collection('posts', (ref) =>
        ref.where('approved', '==', false).orderBy('timestamp', 'desc')
      )
      .valueChanges();
  }

  approvePost(postId: string): Promise<void> {
    return this.firestore
      .collection('posts')
      .doc(postId)
      .update({ approved: true });
  }

  declinePost(postId: string): Promise<void> {
    return this.firestore.collection('posts').doc(postId).delete();
  }
}
