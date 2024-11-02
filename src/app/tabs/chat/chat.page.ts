import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../chat.service';
import { AuthenticationService } from '../../authentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, OnDestroy {
  segmentValue: string = 'chats';
  recentChats: any[] = [];
  activeUsers: any[] = [];
  private chatSubscription: Subscription;
  private activeUsersSubscription: Subscription;
  private currentUserId: string | null = null;

  constructor(
    private chatService: ChatService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getCurrentUserId().then(userId => {
      this.currentUserId = userId;
      if (userId) {
        this.chatService.updateUserStatus(userId, true);
      }
    });
    this.loadRecentChats();
    this.loadActiveUsers();
  }

  ngOnDestroy() {
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
    if (this.activeUsersSubscription) {
      this.activeUsersSubscription.unsubscribe();
    }
    if (this.currentUserId) {
      this.chatService.updateUserStatus(this.currentUserId, false);
    }
  }
  loadRecentChats() {
    this.chatSubscription = this.chatService.getRecentChats().subscribe(
      (chats) => {
        console.log('Recent chats data in ChatPage:', chats); // Log recent chats data
        this.recentChats = chats;
      },
      (error) => {
        
        console.error('Error loading recent chats:', error);
      }
    );
  }


  
  
  
  
  

  loadActiveUsers() {
    this.activeUsersSubscription = this.chatService.getActiveUsers().subscribe(
      (users) => {
        this.activeUsers = users.map(user => ({
          ...user,
          avatar: user.profilePictureUrl || './assets/profile-placeholder.jpg' // Use default if no picture
        }));
        console.log("Active users:", this.activeUsers);  // Debugging line
      },
      (error) => {
        console.error('Error loading active users:', error);
      }
    );
  }
  

  onSegmentChange(event: any) {
    this.segmentValue = event.detail.value;
    if (this.segmentValue === 'active') {
      this.loadActiveUsers();
    }
  }
  
  async startChat(userId: string) {
    console.log('StartChat called with userId:', userId);
  
    try {
      const chatId = await this.chatService.createOrGetChat(userId);
      console.log('Received chatId:', chatId);
  
      if (chatId) {
        console.log('Navigating to chat-room with ID:', chatId);
        this.router.navigate([`/chat-room/${chatId}`]);
      } else {
        console.error('Chat ID is undefined or null, cannot navigate to chat room');
      }
    } catch (error) {
      console.error('Error in startChat:', error);
    }
  }
}
