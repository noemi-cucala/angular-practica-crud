import { Component, signal, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { Cars } from '../../../../core/models/cars.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  //imports: [AsyncPipe],
  templateUrl: './table.component.html'
})
export class TableComponent {
 
  loading = signal(false);
  //loading = new BehaviorSubject(true);

  @Input({required: true}) cars!: Cars | null;
  
  /* Opción toSignal(), renderiza más rápido
  carsService = inject(CarsService);
  cars$ = toSignal(this.carsService.getCars(), {
    initialValue: null
  });  */  

  constructor(private router: Router){}

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
