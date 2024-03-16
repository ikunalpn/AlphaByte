import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApisService } from '../../services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit{
  
  constructor(private formBuilder: FormBuilder, private service:ApisService, private router:Router) { }

  selectedBloodGroup: string[] = []; // Property to hold the selected blood group
  selectedTags: string[] = []; 


  patientDetailsForm!: FormGroup;
  mediclaimImage: File | null = null;
  labReportsImage: File | null = null;
  prescriptionImage: File | null = null;
  vaccinationImage: File | null = null;
  weight: string = '0'; 
  height: string = '0';
  bloodGroup: string = '';
  
  

  allergies: string[] = ['Pollen', 'Dust', 'Nuts', 'Shellfish', 'Penicillin'];
  chronicIllnesses: string[] = ['Asthma', 'Diabetes', 'Hypertension', 'Arthritis'];
  vaccDetails: string[] = ['Flu Vaccine', 'COVID-19 Vaccine', 'Hepatitis B Vaccine', 'MMR Vaccine'];

  ngOnInit(): void {
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

  questions = [
    { text: 'What is your weight in kgs?', type: 'text', answer: [] as any },
    { text: 'What is your height in feet and inches?', type: 'text', answer: [] as any },
    { text: 'What is your blood group?', type: 'bloodGroup', answer: [] as string[], options: [] },
    { text: 'Do you have any allergies ?', type: 'tags', answer: [] as string[], all: ['Pollen', 'Dust', 'Nuts', 'Seafood', 'Dairy','Household chemical','Certain medication','Gelatin','Animal Dander','Coconut','Latex','Tree nuts','Fish','Shelfish','Eggs','Wheat','Cocoa','Soya bean','Peanuts','Milk','Spices like corainder,mustard,and garlic','Insect bite example bee sting','None'] },
    { text: 'Do you have any chronic diseases?', type: 'tags', answer: [] as string[], tags: ['Diabetes', 'Hypertension', 'Asthma', 'Cancer', 'Heart Disease','Stoke','Obesity',"Alzhemier's Disease",'Multiple Sclerosis(MS)','Cirrhosis','Acid Reflux disease'] }
  ];
  

  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  currentQuestionIndex = 0;

  previousQuestion() {
    this.currentQuestionIndex--;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  toggleTag(index: number, tag: string) {
    const question = this.questions[index];
    const tagIndex = question.answer.indexOf(tag);
    if (tagIndex !== -1) {
      question.answer.splice(tagIndex, 1);
    } else {
      question.answer.push(tag);
    }
  }
  toggleAll(index: number, all: string) {
    const question = this.questions[index];
    const tagIndex = question.answer.indexOf(all);
    if (tagIndex !== -1) {
      question.answer.splice(tagIndex, 1);
    } else {
      question.answer.push(all);
    }
  }
  

  onFileSelected(event: any) {
    const question = this.questions[this.currentQuestionIndex];
    question.answer = Array.from(event.target.files) as File[];
  }

  submit() {
    const formData = new FormData();
    formData.append('patientName', localStorage.getItem('patientName') || '');
    formData.append('weight', this.patientDetailsForm.get('weight')?.value);
    formData.append('height', this.patientDetailsForm.get('height')?.value);
    formData.append('bloodGroup', this.selectedBloodGroup.join('') || '');
    formData.append('chronicIllness', this.selectedTags.join('') || ''  );
    formData.append('patientName', localStorage.getItem('patientName') || '');
    

    this.service.savePatientDetails(formData).subscribe(
      (response) => {
        console.log('Patient details saved successfully:', response);

        localStorage.setItem('patientName', this.patientDetailsForm.get('patientName')?.value);
        localStorage.setItem('weight', this.patientDetailsForm.get('weight')?.value);
        localStorage.setItem('height', this.patientDetailsForm.get('height')?.value);
        localStorage.setItem('bloodGroup', this.selectedBloodGroup.join(''));
        localStorage.setItem('chronicIllness', this.selectedTags.join(''));
        this.router.navigateByUrl('/patient-dashboard');
      },
      (error) => {
        console.error('Error saving patient details:', error);
      }
    );
  }
}
