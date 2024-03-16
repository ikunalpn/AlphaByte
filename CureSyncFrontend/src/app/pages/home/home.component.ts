<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

=======
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
>>>>>>> dfa306c2308ea4213c8ba695f3bae979565fa89d
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit(): void {
    localStorage.clear();
>>>>>>> dfa306c2308ea4213c8ba695f3bae979565fa89d
  }
}
