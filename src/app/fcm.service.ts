import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  constructor(private afMessaging: AngularFireMessaging) {}

  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(take(1))
      .subscribe(
        () => console.log('Notification permission granted.'),
        error => console.error('Notification permission denied.', error)
      );
  }

  getToken() {
    this.afMessaging.getToken
      .pipe(take(1))
      .subscribe(
        (token) => console.log('User FCM Token:', token),
        error => console.error('Error fetching FCM token', error)
      );
  }

  listenForMessages() {
    this.afMessaging.messages
      .subscribe((message) => console.log('New message:', message));
  }
}
