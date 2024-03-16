import { Component, OnInit } from '@angular/core';

import { ApisService } from '../../services/apis.service';
import { PatientDetails } from '../../services/apis.service'; // Import the PatientDetails interface

@Component({
 selector: 'app-docdashboard',
 templateUrl: './docdashboard.component.html',
 styleUrls: ['./docdashboard.component.css']
})
export class DocdashboardComponent implements OnInit {
patients: PatientDetails[] = [];

constructor(private patientService: ApisService) { }

ngOnInit() {
  this.getPatientDetails();
}

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
}
