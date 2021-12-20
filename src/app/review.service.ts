import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from 'Movie';
import { Review } from 'Review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>('http://localhost:8080/reviews');
  }

  getMovieInfo(id: String): Observable<Movie> {
    return this.http.get<Movie>(
      `http://www.omdbapi.com/?i=${id}&apikey=50275210`
    );
  }
}
