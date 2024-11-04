import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage {
  report = {
    title: '',
    description: '',
  };
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private reportService: ReportService, private router: Router) {}

  goBack() {
    this.router.navigate(['/student-dashboard/profile']);
  }

  selectImage() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  async submitReport() {
    if (this.report.title && this.report.description) {
      try {
        await this.reportService.createReport(this.report, this.selectedFile);
        alert('Report submitted successfully!');
        this.router.navigate(['/student-dashboard/profile']);
      } catch (error) {
        console.error('Error submitting report:', error);
        alert('There was an error submitting your report. Please try again.');
      }
    } else {
      alert('Please fill out the title and description.');
    }
  }
}
