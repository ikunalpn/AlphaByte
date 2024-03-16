import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { PatPrescriptionComponent } from './pages/pat-prescription/pat-prescription.component';
import { PatLabreportComponent } from './pages/pat-labreport/pat-labreport.component';
import { PatVaccineComponent } from './pages/pat-vaccine/pat-vaccine.component';
import { PatAccountComponent } from './pages/pat-account/pat-account.component';
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
  },
  {
    path:"patient-prescription",
    component:PatPrescriptionComponent,
    pathMatch:"full"
  },
  {
    path:"patient-lab-reports",
    component:PatLabreportComponent,
    pathMatch:"full"
  },
  {
    path:"patient-vaccine",
    component:PatVaccineComponent,
    pathMatch:"full"
  },
  {
    path:"patient-account",
    component:PatAccountComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
