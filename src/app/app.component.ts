import { Component } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private statusService: StatusService) {
    // Injecting the service initializes it and activates the listeners
  }
}
