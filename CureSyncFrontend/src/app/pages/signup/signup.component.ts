import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    localStorage.clear();
  }

}
