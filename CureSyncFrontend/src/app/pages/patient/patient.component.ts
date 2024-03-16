import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  questions = [
    { text: 'What is your weight in kgs?', type: 'text', answer: [] as any },
    { text: 'What is your height in feet and inches?', type: 'text', answer: [] as any },
    { text: 'What is your blood group?', type: 'bloodGroup', answer: [] as string[], options: [] },
    { text: 'Do you have any allergies?', type: 'tags', answer: [] as string[], tags: ['Pollen', 'Dust', 'Nuts', 'Seafood', 'Dairy','Household chemical','Certain medication','Gelatin','Animal Dander','Coconut','Latex','Tree nuts','Fish','Shelfish','Eggs','Wheat','Cocoa','Soya bean','Peanuts','Milk','Spices like corainder,mustard,and garlic','Insect bite example bee sting','None'] },
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
  

  onFileSelected(event: any) {
    const question = this.questions[this.currentQuestionIndex];
    question.answer = Array.from(event.target.files) as File[];
  }

  submit() {
    // Handle form submission
    console.log(this.questions);
  }
}
