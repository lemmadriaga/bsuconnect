import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthenticationService
  ) {}

  // Save feedback with user's name
  saveFeedback(comment: string, rating: number) {
    return this.authService.getUserData$().pipe(
      switchMap((user) => {
        const feedbackData = {
          name: user?.fullName || 'Anonymous', // Get user's name or default to "Anonymous"
          comment,
          rating,
          createdAt: new Date(),
        };
        return this.firestore.collection('feedback').add(feedbackData).then(() => {
          console.log('Feedback successfully saved'); // Log success
        });
      })
    ).toPromise().catch((error) => {
      console.error('Error saving feedback:', error); // Log error
      throw error; // Re-throw the error to be handled in submitFeedback
    });
  }

  getFeedbackRatings(): Observable<any[]> {
    return this.firestore
      .collection('feedback', (ref) => ref.orderBy('createdAt', 'desc'))
      .valueChanges();
  }
}
