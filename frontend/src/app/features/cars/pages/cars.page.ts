import { Component } from '@angular/core';
import { TableComponent } from "../components/table/table.component";

@Component({
  selector: 'app-cars',
  imports: [TableComponent],
  templateUrl: './cars.page.html'
})
export class CarsPage {}
