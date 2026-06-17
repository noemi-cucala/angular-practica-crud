import { Component, OnChanges, OnInit, signal, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { CarsService } from '../../../../core/services/cars.service';
import { Cars } from '../../../../core/models/cars.dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { routes } from '../../../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [AsyncPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
 
  cars$: Observable<Cars> | undefined;
  loading = signal(true);
  //loading = new BehaviorSubject(true);
  
  /* Opción toSignal(), renderiza más rápido
  carsService = inject(CarsService);
  cars$ = toSignal(this.carsService.getCars(), {
    initialValue: null
  });  */  


  constructor(private carsService: CarsService, private router: Router){}

  async ngOnInit() {
    await this.loadCars();
  
    //this.loading.next(false);
    console.log("CARS READY! ngOnInit");
    this.loading.set(false);

  }

  /*ngOnChanges() {
    console.log("CARS READY! ngOnChanges");
  }

  ngDoCheck() {
    console.log("CARS READY! ngDoCheck");
  }

  ngAfterContentChecked() {
    console.log("CARS READY! ngAfterContentChecked");
  }

  ngAfterViewChecked() {
    console.log("CARS READY! ngAfterViewChecked");
  }*/

  
  async loadCars() {
    //this.loading.set(true);
    this.cars$ = this.carsService.getCars();
  }

  addCar(): void {
    this.router.navigate(['cars/new']);
  }  
  
  editCar(carId: string): void {
    this.router.navigate(['cars', carId, 'edit']);
  }

  viewCar(carId: string): void {
    this.router.navigate(['cars', carId]);
  } 
}
