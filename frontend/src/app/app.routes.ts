import { Routes } from '@angular/router';
import { HomePage } from './features/home/home.page';
import { CarsPage } from './features/cars/pages/cars.page';
import { DetailsPage } from './features/cars/pages/details/details.page';
import { CreateCarPage } from './features/cars/pages/new/new.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Inicio'
    },
    {
        path: 'cars',
        children: [
            {
                path: '',
                component: CarsPage, 
                title: 'Listado',
            },
            {
                path: 'new',
                component: CreateCarPage, 
                title: 'Crear'
            },
            {
                path: ':id/edit',
                component: CreateCarPage, 
                title: 'Editar'
            },
            {
                path: ':id',
                component: DetailsPage, 
                title: 'Detalle'
            },
        ]
    },    
    {
        path: 'logout',
        component: HomePage, 
    },
    //{path: '**', component: NotFound}, // Wildcard - always last
];
