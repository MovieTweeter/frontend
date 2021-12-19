import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { User } from 'User';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authenticationService: AuthenticationService) {}

  title = 'movie-tweeter-frontend';

  loginModalIsActive: Boolean = false;

  loggedInUser!: User;

  loginUsername!: String;
  loginPassword!: String;

  invalidLoginAttempt: Boolean = false;

  ngOnInit() {
    this.authenticationService.checkLoginStatus().subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  activateModal() {
    this.loginModalIsActive = true;
  }

  deactivateLoginModal() {
    this.loginModalIsActive = false;
  }

  loginUser() {
    this.authenticationService
      .login(this.loginUsername, this.loginPassword)
      .subscribe(
        (user) => {
          this.loggedInUser = user;
          this.loginModalIsActive = false;
          location.reload();
        },
        (error: HttpErrorResponse) => {
          this.invalidLoginAttempt = true;
        }
      );
  }

  logoutUser() {
    this.authenticationService.logout().subscribe((user) => {
      this.loggedInUser = user;
      location.reload();
    });
  }
}
