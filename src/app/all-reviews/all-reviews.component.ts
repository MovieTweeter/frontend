import { Component, OnInit } from '@angular/core';
import { User } from 'User';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css'],
})
export class AllReviewsComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  loggedInUser!: User;

  ngOnInit() {
    this.authenticationService.checkLoginStatus().subscribe((user) => {
      this.loggedInUser = user;
    });
  }
}
