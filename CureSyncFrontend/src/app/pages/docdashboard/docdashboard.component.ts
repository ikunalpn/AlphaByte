import { Component, OnInit } from '@angular/core';

import { ApisService } from '../../services/apis.service';
import { PatientDetails } from '../../services/apis.service'; // Import the PatientDetails interface
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
 selector: 'app-docdashboard',
 templateUrl: './docdashboard.component.html',
 styleUrls: ['./docdashboard.component.css']
})
export class DocdashboardComponent implements OnInit {
patients: PatientDetails[] = [];

constructor(private patientService: ApisService, private snack:MatSnackBar) { }

ngOnInit() {
  this.getPatientDetails();
}
public file: string | ' ' | undefined;

 getPatientDetails() {
   this.patientService.getPatientDetails().subscribe(
     (data: PatientDetails[]) => {
       this.patients = data;
        console.log('Patient details:', this.patients);
     },
     (error) => {
       console.error('Error fetching patient details:', error);
     }
   );
 }
onFileSelected(event: any) {
  console.log('Event:', event);
  this.file = event.target.files[0];
  this.uploadFile(this.patients[0].patientName);
}

uploadFile(patientName: string) {
  console.log('File:', this.file);
  this.snack.open('Prescription uploaded', '', {
    duration: 3000,
  });
  if (this.file) {
    this.patientService.uploadPrescription(this.file,patientName ).subscribe(
      (data) => {
        console.log('Prescription uploaded:', data);
        this.snack.open('Prescription uploaded successfully', '', {
          duration: 3000,
        });
      },
      (error) => {
        this.snack.open('Prescription uploaded', '', {
          duration: 3000,
        });
        console.error('Error uploading prescription:', error);
        
      }
    );
  }
}
}
