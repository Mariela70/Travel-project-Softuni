import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination } from '../shared/types/destination';
import { environment } from 'src/environments/environment';


const {appUrl} = environment;
@Injectable({
  providedIn: 'root'
})
export class DestinationService{

  constructor(private http: HttpClient) { }


  getAllDestination() {
    return this.http.get<Destination[]>(`${appUrl}/data/destinations?sortBy=_createdOn%20desc`)
  }
  getDestinationById(id: string) {
    return this.http.get<Destination>(`${appUrl}/data/destinations/` + id);
  }
  createDestination(title: string, location: string, date: string, imageUrl: string, description: string) {
    return this.http.post<Destination>(`${appUrl}/data/destinations`, {title, location, date, imageUrl, description});
  }
  updateDestination(id: string, title: string, location: string, date: string, imageUrl: string, description: string) {
    return this.http.put<Destination>(`${appUrl}/data/destinations/` + id, {title,  location, date, imageUrl, description});
  }
  deleteDestination(id: string) {
    return this.http.delete<Destination>(`${appUrl}/data/destinations/` + id);
  }
}
