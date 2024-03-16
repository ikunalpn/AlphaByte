import { Component } from '@angular/core';

@Component({
  selector: 'app-docdashboard',
  templateUrl: './docdashboard.component.html',
  styleUrls: ['./docdashboard.component.css']
})
export class DocdashboardComponent {

  toggleFileInput(doctor: string) {
    const fileInput = document.getElementById(`${doctor}Input`) as HTMLInputElement;
    if (fileInput) {
      fileInput.click(); // Trigger click event on file input
    }
  }

  uploadFile(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if (files && files.length > 0) {
      const fileToUpload = files[0]; // Get the first file from the FileList
      // Implement your file upload logic here
    }
  }

}
