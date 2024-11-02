import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { FeedbackModalComponent } from 'src/app/components/feedback-modal/feedback-modal.component';
import { ProfilePage } from './profile.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, FeedbackModalComponent],

})
export class ProfilePageModule {}
