import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../../models/model.dto';
import { Brand } from '../../models/brand.dto';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {

  private readonly API_URL = 'http://localhost:4200/api'

  private http = inject(HttpClient);

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.API_URL + '/brands');
  }
  
  getModels(brandId: string): Observable<Model[]> {
    return this.http.get<Model[]>(this.API_URL + '/brands/' + brandId + '/models');
  }
}
