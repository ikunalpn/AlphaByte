import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApisService } from '../../services/apis.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private service:ApisService, private snack:MatSnackBar,private router:Router) { }

  public username='';
  public password='';
  ngOnInit(): void {
    localStorage.clear();
  }

  public login(): void {
    console.log(this.username, this.password);
    this.service.login(this.username, this.password).subscribe(
      (response: HttpResponse<any>) => {
        console.log('Response:', response);
        const role = response.body.role; // Assuming role is directly under the body
        console.log('Role:', role);
        if (role === 'DOCTOR') {
          localStorage.setItem('username', this.username);
          this.snack.open('Login Success', '', { duration: 2000 });
          this.router.navigateByUrl('/docdashboard').then(() => console.log('Navigated to doctor-dashboard'));
        } else {
          console.log('Role is not DOCTOR');
          localStorage.setItem('username', this.username);
          this.snack.open('Login Success', '', { duration: 2000 });
          this.router.navigateByUrl('/patient-dashboard').then(() => console.log('Navigated to patient-dashboard'));
        }

      
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
