import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SidebarModule } from 'primeng/sidebar';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    SignupPageComponent,
    DashboardPageComponent,
    NavbarComponent,
    
    
    
 

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
