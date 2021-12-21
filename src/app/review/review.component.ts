import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Review } from 'Review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  constructor(
    private reviewService: ReviewService,
    private datePipe: DatePipe
  ) {}

  reviews!: Review[];

  ngOnInit() {
    this.reviewService.getAllReviews().subscribe((review) => {
      this.reviews = review;
      console.log(this.reviews);
    });
  }

  convertDate(date: Date) {
    return this.datePipe.transform(date, 'MMM d, y, h:mm:ss a');
  }
}
