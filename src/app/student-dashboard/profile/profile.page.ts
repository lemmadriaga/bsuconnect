import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Import Router
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
    input.onchange = async (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const userId = await this.authService.getCurrentUserId();
        if (userId) {
          try {
            await this.authService.uploadProfilePicture(userId, file).toPromise();
            this.presentAlert('Success', 'Profile picture updated successfully.');
          } catch (error) {
            this.presentAlert('Error', 'Failed to update profile picture. Please try again.');
          }
        }
      }
    };
    input.click();
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  signOut() {
    this.authService.logoutUser().then(() => {
      console.log('User signed out successfully');
      this.router.navigate(['/authentication']);
    }).catch(error => {
      console.error('Error signing out:', error);
    });
  }

  // Example method to navigate to ForumPage
  navigateToForum() {
    this.userData$.subscribe(userData => {
      if (userData) {
        this.router.navigate(['/forum'], { queryParams: { userId: userData.uid, avatar: userData.profilePictureUrl, role: userData.role } });
      }
    });
  } 



  async openFeedback() {
    const modal = await this.modalController.create({
      component: FeedbackModalComponent,
    });

    // Present the modal and await its dismissal
    await modal.present();

    // Handle the modal dismissal if needed
    const { data } = await modal.onDidDismiss();
    console.log('Modal dismissed with data:', data);
  }
}
