import { Component, inject } from '@angular/core';
import { CarsService } from '../../../../core/services/cars.service';
import { Cars } from '../../../../core/models/cars.dto';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  
  private readonly carsService = inject(CarsService);
  cars?: Cars;

  ngOnInit() {
    this.loadCars();
    console.log("CARS READY! ");
  }

  loadCars(): void {
    this.carsService.getCars().subscribe(cars =>
      {
        this.cars = cars;
      }
    )
  }

  viewCarDetails(carId: string): void {
    console.log("ID CAR! " + carId);
  }
}
