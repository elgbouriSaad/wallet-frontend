import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'] // Fix: Use 'styleUrls' instead of 'styleUrl'
})
export class LoginPageComponent {
goBack() {
  this.router.navigate(['/home']);
}

  constructor(private router: Router) {} // Inject Router in the constructor

  onSubmit() {
    console.log('Submit button clicked');
    this.router.navigate(['/dashboard']);
  }
}
