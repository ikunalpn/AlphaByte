// patient-dashboard.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  openHealthMetricDetails(metricType: string) {
    // Implement logic to open details for the selected health metric
    console.log(`Opening details for ${metricType}`);
  }
}