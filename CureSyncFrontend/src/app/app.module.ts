import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { PatPrescriptionComponent } from './pages/pat-prescription/pat-prescription.component';
import { PatLabreportComponent } from './pages/pat-labreport/pat-labreport.component';
import { PatVaccineComponent } from './pages/pat-vaccine/pat-vaccine.component';
import { PatAccountComponent } from './pages/pat-account/pat-account.component';
import { DocdashboardComponent } from './pages/docdashboard/docdashboard.component';
import { PatHealthStatComponent } from './pages/pat-health-stat/pat-health-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PatientDetailsComponent,
    PatientComponent,
    PatientDashboardComponent,
    PatHealthStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatSnackBarModule,  FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
