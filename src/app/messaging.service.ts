import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(private afMessaging: AngularFireMessaging) {}

  requestPermission() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('Permission granted! Token:', token);
        // Save the token to Firestore or your server for later use
      },
      (error) => {
        console.error('Permission denied:', error);
      }
    );
  }

  listenForMessages() {
    this.afMessaging.messages.subscribe((message) => {
      console.log('New message received:', message);
      // Handle incoming messages (e.g., show an alert or local notification)
    });
  }
}
