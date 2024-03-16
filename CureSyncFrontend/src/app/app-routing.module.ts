import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { DocdashboardComponent } from './pages/docdashboard/docdashboard.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  }, 
  {
    path: "details",
    component: PatientDetailsComponent,
    pathMatch: "full"
  },
  {
    path:"patient",
    component:PatientComponent,
    pathMatch:"full"
  },
  {
    path:"patient-dashboard",
    component:PatientDashboardComponent,
    pathMatch:"full"
  },
  {
    path:"docdashboard",
    component:DocdashboardComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
