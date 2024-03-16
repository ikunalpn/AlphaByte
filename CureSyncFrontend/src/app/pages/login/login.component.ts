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
      (response: HttpResponse<string>) => {
        console.log(response.body); 
        localStorage.setItem('username', this.username);
        this.snack.open('Login Success', '', { duration: 2000 });
        this.router.navigateByUrl('/patient-dashboard');
        
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
