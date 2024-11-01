import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ForumService, Post } from '../forum.service';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import { Chart } from 'chart.js/auto';
import { ReportService } from '../report.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import * as L from 'leaflet';
import 'leaflet-control-geocoder';


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
export class AdminDashboardPage implements OnInit, AfterViewInit {
  map: L.Map | null = null;
  marker: L.Marker | null = null;
  mapReady: boolean = false;
  feedbackList: any[] = []; // Full feedback list
  paginatedFeedbackList: any[] = []; // Feedback for current page
  ratingsChart: any;
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPages: number[] = []; // Array to store page numbers
  reports: any[] = [];
  paginatedReportList: any[] = [];
  departmentChart: any;
  showEventForm = false;
  eventForm = {
    title: '',
    date: '',
    time: '',
    location: '',
    invited: [],
    description: '',
    thumbnailUrl: '',
    latitude: 14.073856, // Default latitude
    longitude: 121.2612608,
  
  };
  events: any[] = []; // List of events
  showEventDetailsModal = false;
  selectedEventId: string | null = null;
  attendeeList: any[] = [];
  attendeesDepartmentChart: any;


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
    private firestore: AngularFirestore, 
    private storage: AngularFireStorage
  ) {
    this.pendingPosts$ = this.forumService.getPostsForApproval();
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;
  
  }

  // openEventForm() {
  //   this.showEventForm = true;
  // }
  // closeEventForm() {
  //   this.showEventForm = false;
  // }
  eventDetails(eventId: string) {
    if (eventId) {
        this.selectedEventId = eventId;
        this.showEventDetailsModal = true;
        this.loadAttendeeDetails();
    } else {
        console.error("Invalid eventId passed to eventDetails:", eventId);
    }
}



  

  // Close the event details modal
  closeEventDetailsModal() {
    this.showEventDetailsModal = false;
    if (this.attendeesDepartmentChart) {
      this.attendeesDepartmentChart.destroy(); // Destroy the chart instance
    }
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

    this.firestore.collection('events').snapshotChanges().subscribe((events: any[]) => {
      this.events = events.map(e => {
          return {
              id: e.payload.doc.id,  // Include the document ID here
              ...e.payload.doc.data()
          };
      });
  });

    
  }

  ngAfterViewInit() {
    if (this.showEventForm) {
      this.initializeMapWithDelay();
    }
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
  // submitEventForm() {
  //   // Convert roles to lowercase before adding them to Firestore
  //   if (this.eventForm.title && this.eventForm.date && this.eventForm.time && this.eventForm.thumbnailUrl) {
  //     // Ensure all roles in `invited` are lowercase
  //     this.eventForm.invited = this.eventForm.invited.map((role: string) => role.toLowerCase());
      
  //     this.firestore.collection('events').add(this.eventForm).then(() => {
  //       this.showEventForm = false;
  //       this.eventForm = { title: '', date: '', time: '', location: '', invited: [], description: '', thumbnailUrl: '' };
  //     });
  //   } else {
  //     alert("Please wait for the thumbnail to finish uploading or fill all required fields.");
  //   }
  // }
  

  uploadThumbnail(event: any) {
    const file = event.target.files[0];
    const filePath = `thumbnails/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
  
    fileRef.put(file).then(() => {
      fileRef.getDownloadURL().subscribe((url) => {
        this.eventForm.thumbnailUrl = url; // Set the thumbnail URL after upload completes
      });
    });
  }
  
  loadAttendeeDetails() {
    if (typeof this.selectedEventId === 'string' && this.selectedEventId) {
        console.log("Loading attendees for event ID:", this.selectedEventId);

        // Fetching attendees from the subcollection 'attendees'
        this.firestore
            .collection('events')
            .doc(this.selectedEventId)
            .collection('attendees')
            .valueChanges()
            .subscribe((attendees: any[]) => {
                console.log("Fetched Attendees:", attendees); // Log fetched attendees
                this.attendeeList = attendees;
                this.updateDepartmentChart(attendees); // Update chart after loading attendees
            });
    } else {
        console.error("Invalid selectedEventId:", this.selectedEventId);
    }
}





  
  
  

updateDepartmentChart(attendees: any[]) {
  // Filter attendees with 'present' status only
  const presentAttendees = attendees.filter(attendee => attendee.status === 'present');
  
  // Count attendees by department from the filtered list
  const departmentCounts = this.countAttendeesByDepartment(presentAttendees);
  const departments = Object.keys(departmentCounts);
  const counts = Object.values(departmentCounts);

  const ctx = document.getElementById('attendeesDepartmentChart') as HTMLCanvasElement;

  // Destroy the previous chart if it exists to prevent overlap
  if (this.attendeesDepartmentChart) {
      this.attendeesDepartmentChart.destroy();
  }

  this.attendeesDepartmentChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: departments,
          datasets: [{
              data: counts,
              backgroundColor: ['#3498db', '#e74c3c', '#f39c12', '#2ecc71', '#9b59b6'],
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top'
              }
          }
      }
  });
}


private countAttendeesByDepartment(attendees: any[]) {
  const departmentCounts: { [key: string]: number } = {};

  attendees.forEach(attendee => {
      const department = attendee.department;
      departmentCounts[department] = (departmentCounts[department] || 0) + 1;
  });

  return departmentCounts;
}
openEventForm() {
  this.showEventForm = true;
  // Initialize map after modal is shown
  setTimeout(() => {
    this.initializeMapWithDelay();
  }, 500);
}

closeEventForm() {
  if (this.map) {
    this.map.remove();
    this.map = null;
  }
  if (this.marker) {
    this.marker = null;
  }
  this.showEventForm = false;
}

submitEventForm() {
  if (this.eventForm.title && this.eventForm.date && this.eventForm.time && this.eventForm.thumbnailUrl) {
    this.eventForm.invited = this.eventForm.invited.map((role: string) => role.toLowerCase());

    this.firestore.collection('events').add(this.eventForm).then(() => {
      this.showEventForm = false;
      this.eventForm = {
        title: '',
        date: '',
        time: '',
        location: '',
        invited: [],
        description: '',
        thumbnailUrl: '',
        latitude: null,
        longitude: null,
      };
    });
  } else {
    alert("Please wait for the thumbnail to finish uploading or fill all required fields.");
  }
}
initializeMapWithDelay() {
  if (this.map) {
    this.map.remove();
  }

  setTimeout(() => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error('Map container not found');
      return;
    }

    try {
      this.map = L.map('map', {
        center: [this.eventForm.latitude, this.eventForm.longitude],
        zoom: 13,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
          })
        ]
      });

      this.marker = L.marker([this.eventForm.latitude, this.eventForm.longitude], {
        draggable: true
      }).addTo(this.map);

      this.marker.on('dragend', (event) => {
        const marker = event.target;
        const position = marker.getLatLng();
        this.eventForm.latitude = position.lat;
        this.eventForm.longitude = position.lng;
      });

      setTimeout(() => {
        this.map?.invalidateSize();
      }, 250);

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, 500);
}


updateMarkerPosition() {
  if (this.map && this.marker && this.eventForm.latitude && this.eventForm.longitude) {
    const newLatLng = L.latLng(this.eventForm.latitude, this.eventForm.longitude);
    this.marker.setLatLng(newLatLng);
    this.map.setView(newLatLng, this.map.getZoom());
  }
}


setLocationFromAddress() {
  if (!this.eventForm.location || !this.map || !this.marker) return;

  // Initialize the geocoder
  const geocoder = L.Control.Geocoder.nominatim();

  geocoder.geocode(this.eventForm.location, (results) => {
    if (results && results.length > 0) {
      const latlng = results[0].center;
      this.eventForm.latitude = latlng.lat;
      this.eventForm.longitude = latlng.lng;

      // Update the marker position and map view
      this.marker.setLatLng(latlng);
      this.map.setView(latlng, this.map.getZoom());
    } else {
      alert("Address not found. Please enter a valid location.");
    }
  });
}






}
