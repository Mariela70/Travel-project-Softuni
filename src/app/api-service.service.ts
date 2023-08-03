import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Destination } from './shared/types/destination';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private appUrl = environment.appUrl;
  constructor(private http: HttpClient) {}

  getAllDestination() {
    return this.http.get<Destination[]>(`${this.appUrl}/data/destinations`)
  }
  getDestinationById(id: string) {
    return this.http.get<Destination>(`${this.appUrl}/data/destinations/${id}`);
  }
}
