import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/types/user-id';
import { BehaviorSubject, Subscription, catchError, filter, of, tap } from 'rxjs';

const { appUrl } = environment;
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(filter((val): val is IUser | null => val !== undefined));
  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }
  subscription: Subscription;
  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
        this.user = user;
      })
  }

  register(firstName: string, lastName: string, email: string, password: string, rePassword: string) {
    return this.http.post<IUser>(`${appUrl}/users/register`, { firstName, lastName, email, password, rePassword })
      .pipe(tap(user => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http.post<IUser>(`${appUrl}/users/login`, { email, password })
      .pipe(tap(user => this.user$$.next(user)));
  }
  logout() {
    return this.http.post<void>(`${appUrl}/users/logout`, {})
      .pipe(tap(() => this.user$$.next(null)));
  }
  getMyProfile() {
    return this.http.get<IUser>(`${appUrl}/data/profile`)
      .pipe(tap(user => this.user$$.next(user)),
      catchError((err) => {
        this.user$$.next(null);
        return of(err);
      }));
  }
  // getMyProfile() {
  //   return this.http.get<IUser>(`${appUrl}/data/destinations?where=_ownerId%3D%22${this.user}%22&sortBy=_createdOn%20desc`)
  //     .pipe(tap(user => this.user$$.next(user)));
  // }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

