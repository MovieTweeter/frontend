import { Component, OnInit } from '@angular/core';
import { Movie } from 'Movie';
import { Review } from 'Review';
import { User } from 'User';
import { AuthenticationService } from '../authentication.service';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css'],
})
export class AllReviewsComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private reviewService: ReviewService
  ) {}

  loggedInUser!: User;

  reviews!: Review[];

  movies!: Movie[];

  ngOnInit() {
    // this.authenticationService.checkLoginStatus().subscribe((user) => {
    //   this.loggedInUser = user;
    // });

    this.reviewService.getAllReviews().subscribe((review) => {
      this.reviews = review;
      console.log(this.reviews);
    });
  }

  getImage(id: String) {
    this.reviewService.getMovieInfo(id).subscribe((movie) => {
      this.movies.push(movie);
      console.log(this.movies);
    });
  }
}
