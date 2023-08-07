import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { Destination } from '../shared/types/destination';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private appUrl = environment.appUrl;

  private endPoints = {
    create: '/data/destinations',
    details: '/data/destinations/',
    edit: '/data/destinations/',
    delete: '/data/destinations/',
  };

  constructor(private http: HttpClient, private userService: UserService) {}

  getAllDestination() {
    return this.http.get<Destination[]>(`${this.appUrl}/data/destinations`)
  }
  getDestinationById(id: string) {
    return this.http.get<Destination>(`${this.appUrl}/data/destinations/${id}`);
  }

  create(data: object): Observable<any> {
    const accessToken = this.userService.user.accessToken;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'X-Authorization': accessToken,
    });

    return this.http.post(
      `${this.appUrl}${this.endPoints.create}`,
      JSON.stringify(data),
      { headers }
    );
  }

  edit(destinationId: string, data: object): Observable<any> {
    const accessToken = this.userService.user.accessToken;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'X-Authorization': accessToken,
    });

    return this.http.put(
      `${this.appUrl}${this.endPoints.edit}${destinationId}`,
      JSON.stringify(data),
      { headers }
    );
  }

  delete(destinationId: string): Observable<any> {
    const accessToken = this.userService.user.accessToken;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'X-Authorization': accessToken,
    });

    return this.http.delete(
      `${this.appUrl}${this.endPoints.delete}${destinationId}`,
      { headers }
    );
  }

}