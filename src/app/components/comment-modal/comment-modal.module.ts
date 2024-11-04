import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentModalComponent } from './comment-modal.component';

@NgModule({
  declarations: [CommentModalComponent],
  imports: [
    CommonModule,
    IonicModule, // Add IonicModule here
    FormsModule, // Add FormsModule here for ngModel support
    ReactiveFormsModule, // Add ReactiveFormsModule here if needed
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add CUSTOM_ELEMENTS_SCHEMA here
})
export class CommentModalModule {}
