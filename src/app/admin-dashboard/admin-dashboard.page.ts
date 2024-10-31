import { Component, OnInit } from '@angular/core';
import { ForumService, Post } from '../forum.service';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import { Chart } from 'chart.js/auto';
import { ReportService } from '../report.service';

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
  feedbackList: any[] = []; // Full feedback list
  paginatedFeedbackList: any[] = []; // Feedback for current page
  ratingsChart: any;
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPages: number[] = []; // Array to store page numbers
  reports: any[] = [];
  paginatedReportList: any[] = [];
  departmentChart: any;

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
    private router: Router,
    private feedbackService: FeedbackService,
    private reportService: ReportService,
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
    this.authService.getUserDepartmentCounts().subscribe((departmentCounts) => {
      this.createDepartmentChart(departmentCounts);
    });

    // Get total user count
    this.authService.getTotalUserCount().subscribe((count) => {
      this.totalUsers = count;
    });

    // Fetch feedback data
    this.feedbackService.getFeedbackRatings().subscribe((feedbacks: any[]) => {
      this.feedbackList = feedbacks;
      this.calculateTotalPages();
      this.updatePaginatedFeedbackList();
      this.createRatingsChart(feedbacks.map((feedback) => feedback.rating));
    });
    this.reportService.getReports().subscribe((reports) => {
      this.reports = reports;
    });

    this.fetchReports();
  }

  calculateTotalPages() {
    const pageCount = Math.ceil(this.feedbackList.length / this.itemsPerPage);
    this.totalPages = Array.from({ length: pageCount }, (_, i) => i + 1); // Array of page numbers
  }

  updatePaginatedFeedbackList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedFeedbackList = this.feedbackList.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedFeedbackList();
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

  createRatingsChart(ratings: number[]) {
    const ratingCounts = [0, 0, 0, 0, 0];

    ratings.forEach((rating) => {
      ratingCounts[rating - 1] += 1;
    });

    const ctx = document.getElementById('ratingsChart') as HTMLCanvasElement;

    this.ratingsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
        datasets: [
          {
            label: 'Number of Ratings',
            data: ratingCounts,
            backgroundColor: '#990008',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
  
  markAsSolved(reportId: string) {
    this.reportService.markReportAsSolved(reportId).then(() => {
      alert('Report marked as solved.');
      this.fetchReports();
    });
  }

  fetchReports() {
    this.reportService.getReports().subscribe((reports) => {
      this.reports = reports || []; // Set reports to an empty array if no data
      this.calculateReportPages();   // Calculate pages based on fetched reports
      this.updatePaginatedReportList(); // Update paginated list
    });
  }
  calculateReportPages() {
    const pageCount = Math.ceil(this.reports.length / this.itemsPerPage);
    this.totalPages = Array.from({ length: pageCount }, (_, i) => i + 1); // Creates an array of page numbers
  }
  
  updatePaginatedReportList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedReportList = this.reports.slice(startIndex, endIndex); // Paginate reports
  }
  
  createDepartmentChart(departmentCounts: { [department: string]: number }) {
    const ctx = document.getElementById('departmentChart') as HTMLCanvasElement;
    const labels = Object.keys(departmentCounts);
    const data = Object.values(departmentCounts);

    this.departmentChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Users per Department',
            data: data,
            backgroundColor: [
              '#3498db', // CTE
              '#e74c3c', // Unknown
              '#f39c12', // CET
              '#f1c40f', // CAS
              '#1abc9c', // CICS
            ],
            borderWidth: 2, // Adjust border width as needed
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.2, // Adjust this to control chart sizing  
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
    
    
    
    
  }
  
  


}
