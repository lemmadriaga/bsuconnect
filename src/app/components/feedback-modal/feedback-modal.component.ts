import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedbackService } from 'src/app/feedback.service';

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
    private feedbackService: FeedbackService
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
}
