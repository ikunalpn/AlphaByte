import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pat-prescription',
  templateUrl: './pat-prescription.component.html',
  styleUrl: './pat-prescription.component.css'
})
export class PatPrescriptionComponent implements OnInit{
  ngOnInit(): void {
    this.patientname = localStorage.getItem('username') ?? '';
  }

  patientname: string = '';
}
