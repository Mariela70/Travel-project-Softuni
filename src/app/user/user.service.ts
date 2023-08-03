import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../shared/types/user-id';

const { appUrl } = environment;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | any | undefined;
  private USER_KEY = 'user';

  get isLoggedIn() {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    try {
      const lsUSer = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUSer);
    } catch (error) {
      this.user = undefined;
    }
  }

  private appUrl = environment.appUrl;

  private endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
  };

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.appUrl}${this.endpoints.login}`, {
      email: email,
      password: password,
    });
  }

  register(firstName: string, lastName: string, email: string, password: string, rePassword: string): Observable<any> {
    return this.http.post(`${this.appUrl}${this.endpoints.register}`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      rePassword: rePassword
    });
  }

  logout(): void {
    const accessToken = this.user.accessToken;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'X-Authorization': accessToken,
    });
    this.http
      .get(`${this.appUrl}/users/logout`, { headers })
      .subscribe((res) => {
        this.user = undefined;
        localStorage.removeItem(this.USER_KEY);
      });
  }
  // getMyProfile() {
  //   return this.http.get<IUser>(`${appUrl}/users/me`)
  //     .pipe(tap(user => this.user$$.next(user)),
  //     catchError((err) => {
  //       this.user$$.next(null);
  //       return of(err);
  //     }));
  // }
  // getMyDestination(id: string | null) {
  //   return this.http.get<IUser>(`${appUrl}/data/destinations?where=_ownerId%3D%22${this.user}%22&sortBy=_createdOn%20desc`)
  //     .pipe(tap(user => this.user$$.next(user)));
  // }
}
