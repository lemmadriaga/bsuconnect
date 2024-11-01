import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from 'src/app/authentication.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  event: any;
  isRegistered: boolean = false;
  isAttended: boolean = false;
  userId: string | null = null;
  userName: string | null = null;
  userDepartment: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {
    // Get the event ID from the route
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      // Fetch user information
      this.authService.getUserId().subscribe((id) => {
        this.userId = id;
        console.log("User ID:", this.userId);
      });
      this.authService.getUserName().subscribe((name) => {
        this.userName = name;
        console.log("User Name:", this.userName);
      });
      this.authService.getUserDepartment().subscribe((department) => {
        this.userDepartment = department;
        console.log("User Department:", this.userDepartment);
      });

      // Fetch the event details by ID
      this.firestore
        .collection('events')
        .doc(eventId)
        .valueChanges()
        .subscribe((eventData) => {
          if (eventData && typeof eventData === 'object') {
            this.event = { ...(eventData as object), id: eventId };
            this.checkIfRegistered(eventId);
          } else {
            console.error('Event data is not an object:', eventData);
          }
        });
    }
  }

  checkIfRegistered(eventId: string) {
    // Check if the user is already registered for the event
    if (this.userId) {
      this.firestore
        .collection('events')
        .doc(eventId)
        .collection('attendees')
        .doc(this.userId)
        .get()
        .subscribe((doc) => {
          this.isRegistered = doc.exists;
          if (this.isRegistered) {
            this.isAttended = doc.data()?.['status'] === 'Attended';


          }
        });
    }
  }

  registerToEvent() {
    if (!this.isRegistered && this.userId && this.userName && this.userDepartment) {
      const attendeeData = {
        name: this.userName,
        department: this.userDepartment,
        status: 'Registered',
      };

      this.firestore
        .collection('events')
        .doc(this.event.id)
        .collection('attendees')
        .doc(this.userId)
        .set(attendeeData)
        .then(() => {
          this.isRegistered = true;
          console.log("Attendee registered successfully.");
        })
        .catch(error => console.error("Error registering attendee:", error));
    } else {
      console.error("User data missing or already registered.");
    }
  }

  // Check if the current date matches the event date
  isEventToday(): boolean {
    const today = new Date();
    const eventDate = new Date(this.event.date);
    return (
      today.getFullYear() === eventDate.getFullYear() &&
      today.getMonth() === eventDate.getMonth() &&
      today.getDate() === eventDate.getDate()
    );
  }

  // // Mark attendance for the event
  // markAttendance() {
  //   if (this.userId && this.event?.id) {
  //     this.firestore
  //       .collection('events')
  //       .doc(this.event.id)
  //       .collection('attendees')
  //       .doc(this.userId)
  //       .update({ status: 'present' })
  //       .then(() => {
  //         this.isAttended = true;
  //         console.log("Attendance marked as attended.");
  //       })
  //       .catch(error => console.error("Error marking attendance:", error));
  //   }
  // }

  async checkLocationAndMarkAttendance() {
    if (navigator.geolocation && this.event?.latitude && this.event?.longitude) {
      try {
        const position = await Geolocation.getCurrentPosition();
        const distance = this.calculateDistance(
          position.coords.latitude,
          position.coords.longitude,
          this.event.latitude,
          this.event.longitude
        );

        // Assuming a 100-meter tolerance for location accuracy
        if (distance <= 0.1) {
          this.markAttendance();
        } else {
          alert("You need to be at the event location to mark attendance.");
        }
      } catch (error) {
        console.error("Error getting location:", error);
        alert("Could not get location. Please ensure location services are enabled.");
      }
    } else {
      alert("Event location not set or location services not available.");
    }
  }

  markAttendance() {
    if (this.userId && this.event?.id) {
      this.firestore
        .collection('events')
        .doc(this.event.id)
        .collection('attendees')
        .doc(this.userId)
        .update({ status: 'present' })
        .then(() => {
          this.isAttended = true;
          console.log("Attendance marked as attended.");
        })
        .catch(error => console.error("Error marking attendance:", error));
    }
  }

  // Calculate distance between two points in kilometers
  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

}
