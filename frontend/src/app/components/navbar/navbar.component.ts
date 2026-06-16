import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  
  testVar = signal("Hola"); 

  redirect(url: string) {
    this.testVar.set(url);
  }

  test2() {
    this.testVar.set("Hola metodo");
  }
}
