import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'auth',
        loadChildren: ()=> import ('./auth/features/auth.routers')
    },
    {
        path:'formularios',
        loadChildren: ()=> import ('./formularios/Formularios.routers')
    }
];

