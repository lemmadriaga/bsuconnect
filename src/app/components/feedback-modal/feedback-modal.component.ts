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
    if (this.feedback && this.rating) {
      try {
        console.log('Feedback Submitted');
        await this.showThankYouAlert();

        await this.feedbackService.saveFeedback(this.feedback, this.rating);

        await this.modalController.dismiss({ dismissed: true });
        console.log('Modal dismissed');
      } catch (error) {
        console.error('Error submitting feedback:', error);
      }
    } else {
      console.warn('Feedback or rating is missing');
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
    this.close();
  }
}
