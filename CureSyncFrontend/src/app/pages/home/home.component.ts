import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    localStorage.clear();
  }
}
