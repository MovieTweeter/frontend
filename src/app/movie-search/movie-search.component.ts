import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent implements OnInit {
  constructor(private reviewService: ReviewService) {}

  movieSearch: string = '';

  searchResults: any = { Search: [{}] };

  selectedMovie: string = '';

  dropdownActive = false;

  displayErrorMessage = false;

  ngOnInit(): void {}

  // searchMovie() {
  //   this.reviewService.searchMovie(this.movieSearch).subscribe((value) => {
  //     this.searchResults = value;
  //     console.log(this.searchResults);
  //     this.dropdownActive = true;
  //   });
  // }

  searchMovie() {
    this.reviewService.searchMovie(this.movieSearch).subscribe((res) => {
      console.log(res.body);
      if (!res.body?.hasOwnProperty('Search')) {
        this.displayErrorMessage = true;
      } else {
        this.searchResults = res.body;
        this.displayErrorMessage = false;
      }
    });
  }

  selectMovie(id: String) {
    console.log(id);
  }
}
