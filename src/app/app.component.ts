import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';
import { PushNotifications } from '@capacitor/push-notifications';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private statusService: StatusService, private messagingService: MessagingService) {
    // Injecting the service initializes it and activates the listeners
  }
  async ngOnInit() {
    await PushNotifications.requestPermissions();
    PushNotifications.register();
    this.messagingService.requestPermission();
    this.messagingService.listenForMessages();

    // Listen for registration success and get the FCM token
    PushNotifications.addListener('registration', (token) => {
      console.log('FCM Token:', token.value);
      // Here, you will send the token to Firestore (we’ll handle this next)
    });

    // Handle errors if registration fails
    PushNotifications.addListener('registrationError', (error) => {
      console.error('Push registration error:', error);
    });
  }
}
