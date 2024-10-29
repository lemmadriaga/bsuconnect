import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

interface Message {
  sender: string;
  content: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  currentUser: string = '';

  constructor(private authService: AuthenticationService) {}

  async ngOnInit() {
    this.currentUser = await this.authService.getCurrentUserId();
    // Load existing messages from Firestore or initialize an empty array
    this.messages = [
      { sender: 'John Doe', content: 'Hello!' },
      { sender: 'Lorna Tolentino', content: 'Hi there!' },
    ];
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: this.currentUser, content: this.newMessage });
      this.newMessage = '';
      // Save the message to Firestore
      this.saveMessageToFirestore(this.currentUser, this.newMessage);
    }
  }

  private saveMessageToFirestore(sender: string, content: string) {
    // Implement the logic to save the message to Firestore
    console.log('Saving message to Firestore:', { sender, content });
  }
}