import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApisService } from '../../services/apis.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  constructor(private service:ApisService, private snack:MatSnackBar, private router:Router) { }

  public userData={
    username:'',
    email:'',
    password:'',
    city:'',
    age:'',
    state:'',
    role:'',
    phoneNo:''

  }
  ngOnInit(): void {
    localStorage.clear();
  }

  public signup(): void {

    this.service.signup(this.userData).subscribe(
      (data)=>{
        console.log(data);
        this.snack.open('Signup Success', '', { duration: 2000 });
        this.router.navigateByUrl('/login');
        localStorage.setItem('patientName', this.userData.username);
        this.router.navigateByUrl('/patient');
        
        
      }
    );
  }

}
