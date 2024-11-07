import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FeedbackService } from 'src/app/feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss'],
})
export class FeedbackModalComponent {
  feedback: string = '';
  rating: number = 0;
  isSubmitting: boolean = false;

  constructor(
    private modalController: ModalController,
    private feedbackService: FeedbackService,
    private alertController: AlertController,
    private router: Router
  ) {}

  setRating(star: number) {
    this.rating = star;
  }

  close() {
    console.log('Manually closing modal');
    this.modalController.dismiss();
  }

  async submitFeedback() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
  
    if (this.feedback && this.rating) {
      try {
        await this.feedbackService.saveFeedback(this.feedback, this.rating);
        console.log('Feedback saved, dismissing modal before alert');
        await this.modalController.dismiss({ dismissed: true });
        await this.showThankYouAlert();
      } catch (error) {
        console.error('Error submitting feedback:', error);
      } finally {
        this.isSubmitting = false;
      }
    } else {
      console.warn('Feedback or rating is missing');
      this.isSubmitting = false;
    }
  }
  
  async showThankYouAlert() {
    const alert = await this.alertController.create({
      header: 'Thank You!',
      message: 'Thank you for your feedback!',
      buttons: [
        {
          text: 'Close',
          handler: () => {
            this.router.navigate(['/profile']);
          },
        },
      ],
    });
  
    await alert.present();
  }
  
}
