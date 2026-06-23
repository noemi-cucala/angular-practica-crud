import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../components/table/table.component";
import { CatalogComponent } from "../components/catalog/catalog.component";
import { Observable } from 'rxjs';
import { Cars } from '../../../core/models/cars.dto';
import { CarsService } from '../../../core/services/cars/cars.service';
import { AsyncPipe } from '@angular/common';

interface CarsFilters {
  brand?: string;
  model?: string;
}

@Component({
  selector: 'app-cars',
  imports: [TableComponent, CatalogComponent, AsyncPipe],
  templateUrl: './cars.page.html'
})
export class CarsPage implements OnInit {
  
  cars$!: Observable<Cars>;
  
  constructor(private carsService: CarsService){}

  ngOnInit() {
    this.loadCars();
  }
  
  async loadCars(filters?: CarsFilters) {
    this.cars$ = this.carsService.getCars(filters);
  }

  onFiltersChanged(filters: CarsFilters) {
    this.loadCars(filters);
  }
}
