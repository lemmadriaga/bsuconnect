import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Import Router

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
    private router: Router 
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
    this.authService.logoutUser();
    this.router.navigate(['/authentication'])
  }

  // Example method to navigate to ForumPage
  navigateToForum() {
    this.userData$.subscribe(userData => {
      if (userData) {
        this.router.navigate(['/forum'], { queryParams: { userId: userData.uid, avatar: userData.profilePictureUrl, role: userData.role } });
      }
    });
  }
}
