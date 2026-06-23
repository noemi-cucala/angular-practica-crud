import { inject, Injectable } from '@angular/core';
import { Cars } from '../../models/cars.dto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  private readonly API_URL = 'http://localhost:4200/api'
  private http = inject(HttpClient);

  getCars(filters?: any): Observable<Cars> {
    let params = new HttpParams();

    if(filters?.brand) {
      params = params.set('brandId', filters.brand);
    }

    if(filters?.model) {
      params = params.set('modelId', filters.model);
    }

    return this.http.get<Cars>(this.API_URL + '/cars', {params});
  }
}
