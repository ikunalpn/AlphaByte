
import { Component, OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  ngOnInit() {
    this.animateCounters();
    
  }

  animateCounters() {
    const counters = document.querySelectorAll<HTMLDivElement>(".count");
    const speed = 200;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target") || "0", 10);
        const count = parseInt(counter.innerText, 10);
        const increment = Math.trunc(target / speed);

        if (count < target) {
          counter.innerText = (count + increment).toString();
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target.toString();
        }
      };
      updateCount();
    });
  constructor() { }

  ngOnInit(): void {
    localStorage.clear();

  }
}
