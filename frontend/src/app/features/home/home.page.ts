import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.page.html'
})
export class HomePage {
  cards = signal(["Dacia", "Seat", "Volkswagen"]);
}
