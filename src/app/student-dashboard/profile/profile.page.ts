import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/feedback.service';
import { FeedbackModalComponent } from 'src/app/components/feedback-modal/feedback-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData$: Observable<any>;

  constructor(
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private feedbackService: FeedbackService,
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    this.userData$ = this.authService.getUserData$(); 
  }

  async uploadImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    // Event handler for when a file is selected
    input.onchange = async (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const userId = await this.authService.getCurrentUserId();
        if (userId) {
          try {
            // Upload the file and wait for the operation to complete
            await this.authService.uploadProfilePicture(userId, file).toPromise();
            this.presentAlert('Success', 'Profile picture updated successfully.');

            // Optional: Refresh the user data observable to get the new profile picture URL
            this.userData$ = this.authService.getUserData$();
          } catch (error) {
            console.error('Error uploading profile picture:', error);
            this.presentAlert('Error', 'Failed to update profile picture. Please try again.');
          }
        }
      }
    };
    input.click(); // Programmatically trigger the file input
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Sign-out method
  signOut() {
    this.authService.logoutUser().then(() => {
      console.log('User signed out successfully');
      this.router.navigate(['/authentication']);
    }).catch(error => {
      console.error('Error signing out:', error);
    });
  }

  // Navigation to ForumPage
  navigateToForum() {
    this.userData$.subscribe(userData => {
      if (userData) {
        this.router.navigate(['/forum'], { queryParams: { userId: userData.uid, avatar: userData.profilePictureUrl, role: userData.role } });
      }
    });
  }

  // Open feedback modal
  async openFeedback() {
    const modal = await this.modalController.create({
      component: FeedbackModalComponent,
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log('Modal dismissed with data:', data);
  }
}
