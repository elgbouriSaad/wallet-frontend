import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomePageComponent },
{ path: 'login', component: LoginPageComponent },
{ path: 'signup', component: SignupPageComponent },
{ path: 'dashboard', component: DashboardPageComponent,children: [
  { path: 'overview', component: OverviewPageComponent },
  // Add more child routes as needed
], },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
