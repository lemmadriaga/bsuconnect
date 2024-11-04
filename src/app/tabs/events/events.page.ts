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
  events: any[] = [];

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getUserRole$().subscribe((role) => {
      console.log('User role:', role);

      this.firestore
        .collection('events')
        .snapshotChanges()
        .subscribe((events) => {
          this.events = events
            .map((event) => {
              const data = event.payload.doc.data() as { [key: string]: any };
              const id = event.payload.doc.id;
              return { id, ...data };
            })
            .filter((event: any) => event.invited.includes(role));

          console.log('Filtered events:', this.events);
        });
    });
  }

  registerEvent(event: any) {
    if (event.id) {
      this.router.navigate(['/event-details', event.id]);
    } else {
      console.error('Event ID is undefined:', event);
    }
  }
}
