import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.page.html',
  styleUrls: ['./feedback-modal.page.scss'],
})
export class FeedbackModalPage {
  feedback: string = '';
  rating: number = 0;
  isSubmitting: boolean = false;

  constructor(
    private firestore: AngularFirestore,
    private alertController: AlertController,
    private router: Router,
    private auth: AngularFireAuth,
  ) {}

  setRating(star: number) {
    this.rating = star;
  }
  async submitFeedback() {
    if (this.isSubmitting) return;
  
    if (this.rating === 0) {
      const alert = await this.alertController.create({
        header: 'Rating Required',
        message: 'Please provide a rating before submitting your feedback.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
  
    this.isSubmitting = true;
  
    try {
      // Get the current user's ID
      const user = await this.auth.currentUser;
      const userId = user ? user.uid : null;
  
      if (userId) {
        // Fetch the user's full name from Firestore
        const userDoc = await this.firestore.collection('users').doc(userId).get().toPromise();
        const userData = userDoc.data();
        const userName = (userData as { fullName?: string })?.fullName || 'Anonymous'; // Use full name or default to 'Anonymous'
  
        const feedbackData = {
          name: userName,
          comment: this.feedback,
          rating: this.rating,
          createdAt: new Date(),
        };
  
        // Save feedback to Firestore
        await this.firestore.collection('feedback').add(feedbackData);
        console.log('Feedback successfully saved in Firestore');
  
        // Show thank you alert
        const thankYouAlert = await this.alertController.create({
          header: 'Thank You!',
          message: 'Your feedback has been submitted successfully.',
          buttons: ['OK']
        });
        await thankYouAlert.present();
  
        // Wait for the alert to be dismissed, then clear feedback, reset rating, and navigate
        await thankYouAlert.onDidDismiss();
        this.feedback = '';
        this.rating = 0;
        this.router.navigate(['profile']);
      } else {
        console.error('No authenticated user found.');
      }
      
    } catch (error) {
      console.error('Error saving feedback:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
  
  
  
  
  close() {
    this.router.navigate(['profile']); // Change to your desired route
  }
}
