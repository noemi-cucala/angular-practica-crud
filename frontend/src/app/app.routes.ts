import { Routes } from '@angular/router';
import { HomePage } from './features/home/home.page';
import { CarsPage } from './features/cars/pages/cars.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'cars',
        component: CarsPage, 
    },    
    {
        path: 'logout',
        component: HomePage, 
    },
    //{path: '**', component: NotFound}, // Wildcard - always last
];
