import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-events-page',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  events: any[] = []; // Filtered events list for the user

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch the user's role
    this.authService.getUserRole$().subscribe((role) => {
      console.log('User role:', role); // Log the user's role to verify
  
      // Fetch events and include each event's document ID
      this.firestore.collection('events').snapshotChanges().subscribe((events) => {
        this.events = events.map((event) => {
          const data = event.payload.doc.data() as { [key: string]: any }; // Cast data to object
          const id = event.payload.doc.id;
          return { id, ...data }; // Ensure each event has an `id`
        }).filter((event: any) => event.invited.includes(role)); // Filter by role
  
        console.log('Filtered events:', this.events); // Log filtered events to verify
      });
    });
  }
  

  registerEvent(event: any) {
    // Check if event has a valid ID before navigating
    if (event.id) {
      this.router.navigate(['/event-details', event.id]);
    } else {
      console.error('Event ID is undefined:', event);
    }
  }
}
  

