import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../chat.service';
import { AuthenticationService } from '../../authentication.service';
import { Observable, Subscription, from, of } from 'rxjs';
import { IonContent } from '@ionic/angular';
import { Location } from '@angular/common';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  chatId: string;
  messages: any[] = [];
  newMessage: string = '';
  otherUser: any;
  currentUserId: string | null = null;
  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private authService: AuthenticationService,
    private location: Location
  ) {}

  ngOnInit() {
    this.chatId = this.route.snapshot.paramMap.get('id');
    this.loadMessages();
    this.loadOtherUser();
    this.subscriptions.push(
      from(this.authService.getCurrentUserId()).subscribe(userId => {
        this.currentUserId = userId;
        if (userId) {
          this.chatService.updateUserStatus(userId, true);
        }
        console.log('Current user ID:', this.currentUserId); // Debug log
      })
    );
  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    if (this.currentUserId) {
      this.chatService.updateUserStatus(this.currentUserId, false);
    }
  }
  

  goBack() {
    this.location.back();
  }


  loadMessages() {
    this.subscriptions.push(
      this.chatService.getMessages(this.chatId).subscribe(
        (messages) => {
          this.messages = messages.map(msg => ({
            ...msg,
            timestamp: msg.timestamp?.toDate()
          }));
          this.scrollToBottom();
        },
        (error) => {
          console.error('Error loading messages:', error);
        }
      )
    );
  }

  loadOtherUser() {
    this.subscriptions.push(
      this.chatService.getOtherUser(this.chatId).subscribe(
        (user) => {
          this.otherUser = user;
        },
        (error) => {
          console.error('Error loading other user:', error);
        }
      )
    );
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.chatId, this.newMessage.trim()).subscribe(
        () => {
          this.newMessage = '';
          this.scrollToBottom();
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    }, 100);
  }

  getUserLabel(userId: string): string {
    return userId === this.currentUserId ? 'You' : this.otherUser?.name || 'User';
  }
}
