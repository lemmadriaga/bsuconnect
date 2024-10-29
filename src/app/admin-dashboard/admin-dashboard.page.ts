import { Component, OnInit } from '@angular/core';
import { ForumService, Post } from '../forum.service';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

interface TabItem {
  label: string;
  icon: string;
  active: boolean;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  tabs: TabItem[] = [
    { label: 'Dashboard', icon: 'grid', active: true },
    { label: 'Postings', icon: 'newspaper', active: false },
    { label: 'Calendar', icon: 'calendar', active: false },
    { label: 'Events', icon: 'calendar', active: false },
    { label: 'Reports', icon: 'bar-chart', active: false },
  ];

  currentTab = 'Dashboard';
  totalUsers: number = 0;

  pendingPosts$: Observable<Post[]>;

  constructor(
    private forumService: ForumService,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.pendingPosts$ = this.forumService.getPostsForApproval();
  }

  ngOnInit() {
    // Check if user is admin
    this.authService.getUserRole$().subscribe((role) => {
      if (role !== 'admin') {
        this.router.navigate(['/home']);
      }
    });
    this.authService.getTotalUserCount().subscribe((count) => {
      this.totalUsers = count;
    });
  }

  selectTab(tab: TabItem) {
    this.tabs.forEach((t) => (t.active = false));
    tab.active = true;
    this.currentTab = tab.label;
  }

  async approvePost(postId: string) {
    try {
      await this.forumService.approvePost(postId);
    } catch (error) {
      console.error('Error approving post:', error);
    }
  }

  async deletePost(postId: string) {
    try {
      await this.forumService.deletePost(postId);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }

  async logout() {
    try {
      await this.authService.logoutUser();
      this.router.navigate(['/authentication']);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}
