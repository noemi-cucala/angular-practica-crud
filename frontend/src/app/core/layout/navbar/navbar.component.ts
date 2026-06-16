import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  
  testVar = signal("Hola");
  
  pages = signal([{url: '/', name: 'Inicio'}, {url: 'cars', name: "Coches"}, {url: 'logout', name: "Cerrar Sesión"}])

  redirect(url: string) {
    this.testVar.set(url);
  }

  test2() {
    this.testVar.set("Hola metodo");
  }
}
