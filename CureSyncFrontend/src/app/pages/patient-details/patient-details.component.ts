import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApisService } from '../../services/apis.service';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css'
})
export class PatientDetailsComponent {
  
  patientDetailsForm: FormGroup;
  mediclaimImage: File | null = null;
  labReportsImage: File | null = null;
  prescriptionImage: File | null = null;
  vaccinationImage: File | null = null;

  allergies: string[] = ['Pollen', 'Dust', 'Nuts', 'Shellfish', 'Penicillin'];
  chronicIllnesses: string[] = ['Asthma', 'Diabetes', 'Hypertension', 'Arthritis'];
  vaccDetails: string[] = ['Flu Vaccine', 'COVID-19 Vaccine', 'Hepatitis B Vaccine', 'MMR Vaccine'];


  constructor(private formBuilder: FormBuilder, private service:ApisService) {
    this.patientDetailsForm = this.formBuilder.group({
      patientName: '',
      weight: ['0'], // Default value of 0
      height: ['0'],
      bloodGroup: '',
      allergies: '',
      chronicIllness: '',
      vaccDetails: ''
      
    });
  }

  onMediclaimImageSelected(event: any) {
    this.mediclaimImage = event.target.files[0];
  }

  onLabReportsImageSelected(event: any) {
    this.labReportsImage = event.target.files[0];
  }

  onPrescriptionImageSelected(event: any) {
    this.prescriptionImage = event.target.files[0];
  }

  onVaccinationImageSelected(event: any) {
    this.vaccinationImage = event.target.files[0];
  }

  savePatientDetails() {
    
    // Prepare the request payload
    const formData = new FormData();
    formData.append('patientName', this.patientDetailsForm.get('patientName')?.value);
    formData.append('weight', this.patientDetailsForm.get('weight')?.value);
    formData.append('height', this.patientDetailsForm.get('height')?.value);
    formData.append('bloodGroup', this.patientDetailsForm.get('bloodGroup')?.value);
    formData.append('allergies', this.patientDetailsForm.get('allergies')?.value);
    formData.append('chronicIllness', this.patientDetailsForm.get('chronicIllness')?.value);
    formData.append('vaccDetails', this.patientDetailsForm.get('vaccDetails')?.value);


    // Append other form data

    if (this.mediclaimImage) {
      formData.append('mediclaimImage', this.mediclaimImage);
    }
    if (this.labReportsImage) {
      formData.append('labReportsImage', this.labReportsImage);
    }
    if (this.prescriptionImage) {
      formData.append('prescriptionImage', this.prescriptionImage);
    }
    if (this.vaccinationImage) {
      formData.append('vaccinationImage', this.vaccinationImage);
    }
    console.log('Saving patient details:', this.patientDetailsForm.value);
    // Send the request to the Spring Boot backend
    this.service.savePatientDetails(formData).subscribe(
      (response) => {
        console.log('Patient details saved successfully:', response);
      },
      (error) => {
        console.error('Error saving patient details:', error);
      }
    );
  }
}