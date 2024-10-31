import { Component, OnInit } from '@angular/core';
import { ForumService, Post, Comment } from '../../forum.service';
import { AuthenticationService } from '../../authentication.service';
import { AlertController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/compat/storage'; // Import Firebase storage
import { finalize } from 'rxjs/operators'; // To handle completion of the upload
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  posts: Post[] = [];
  userData: any;
  newPostContent: string = '';
  selectedImageUrl: string | null = null; // URL of the selected image for preview
  selectedImageFile: File | null = null; // File reference for the selected image

  constructor(
    private forumService: ForumService,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private storage: AngularFireStorage // Inject AngularFireStorage
  ) {}

  ngOnInit() {
    this.authService.getUserData$().subscribe((data) => {
      this.userData = data;
    });

    this.forumService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  // Method to handle image selection
  onImageSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.selectedImageFile = fileInput.files[0];

      // Generate a preview of the image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImageUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedImageFile);
    }
  }

  async createPost() {
    if (!this.newPostContent.trim() && !this.selectedImageUrl) return;

    let imageUrl: string | null = null;

    // Ensure authorAvatar is defined before calling savePost
    const authorAvatar = this.userData?.avatar || null; // Get authorAvatar from userData or set to null

    // Upload the image if one is selected
    if (this.selectedImageFile) {
      const filePath = `posts/${Date.now()}_${this.selectedImageFile.name}`;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, this.selectedImageFile);

      // Wait for the upload to complete and get the download URL
      await uploadTask
        .snapshotChanges()
        .pipe(
          finalize(async () => {
            imageUrl = await fileRef.getDownloadURL().toPromise();
            this.savePost(imageUrl, authorAvatar); // Pass authorAvatar to savePost
          })
        )
        .toPromise();
    } else {
      // Save post without an image
      this.savePost(null, authorAvatar);
    }
  }

  // Method to save post with or without image URL
  private async savePost(imageUrl: string | null, authorAvatar: string | null) {
    try {
      await this.forumService.createPost(this.newPostContent, this.userData, imageUrl);
      this.newPostContent = '';
      this.selectedImageUrl = null; // Reset selected image
      this.selectedImageFile = null;

      if (this.userData.role !== 'faculty') {
        const alert = await this.alertController.create({
          header: 'Post Submitted',
          message: 'Your post has been submitted for approval.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  async addComment(post: Post, commentContent: string) {
    if (!commentContent.trim()) return;

    try {
      await this.forumService.addComment(post.id!, commentContent, this.userData);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  }

  async deletePost(post: Post) {
    if (post.userId === this.userData.uid) {
      const alert = await this.alertController.create({
        header: 'Confirm Delete',
        message: 'Are you sure you want to delete this post?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.forumService.deletePost(post.id!);
            },
          },
        ],
      });
      await alert.present();
    }
  }

  toggleLike(post: Post) {
    this.forumService.toggleLike(post.id!, this.userData.uid);
  }

  toggleDislike(post: Post) {
    this.forumService.toggleDislike(post.id!, this.userData.uid);
  }

  convertTimestampToDate(timestamp: Timestamp | undefined): Date | null {
    if (!timestamp || !timestamp.seconds) {
      return null; // Return null if the timestamp is undefined or invalid
    }
    return new Date(timestamp.seconds * 1000);
  }
}
