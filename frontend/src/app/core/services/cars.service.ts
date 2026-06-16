import { inject, Injectable } from '@angular/core';
import { Cars } from '../models/cars.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  private readonly API_URL = 'http://localhost:4200/api'

  private http = inject(HttpClient);

  getCars(): Observable<Cars> {
    return this.http.get<Cars>(this.API_URL + '/cars');
  }
}
