// patient-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  ngOnInit(): void {
    this.patientname = localStorage.getItem('username') ?? '';
  }
  constructor(private router:Router) { }
  patientname: string = '';

  openHealthMetricDetails(metricType: string) {
    // Implement logic to open details for the selected health metric
    console.log(`Opening details for ${metricType}`);
  }
}