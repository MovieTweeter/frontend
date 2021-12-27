import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'User';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  checkLoginStatus(): Observable<User> {
    return this.http.get<User>(`${environment.url}/loginstatus`, {
      withCredentials: true,
    });
  }

  login(username: String, password: String): Observable<User> {
    return this.http.post<User>(
      `${environment.url}/login`,
      {
        username: username,
        password: password,
      },
      { withCredentials: true }
    );
  }

  logout(): Observable<User> {
    return this.http.post<User>(
      `${environment.url}/logout`,
      {},
      { withCredentials: true }
    );
  }

  signup(username: String, password: String): Observable<User> {
    return this.http.post<User>(
      `${environment.url}/signup`,
      {
        username: username,
        password: password,
      },
      { withCredentials: true }
    );
  }
}
