import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const POC_ROUTES: Routes = [
   {
        path: '',
        component: AppComponent,
        pathMatch: 'full'
    },
];
