import { Routes } from '@angular/router';
import { FirstPageComponent } from './shared/pages/first-page/first-page.component';

export const routes: Routes = [

    {
        path: '',
        component: FirstPageComponent
    },
    
    {
        path: 'presentation',
        loadChildren: () => import('./presentation/presentation.routes'),
    },

    {
        path: '**',
        redirectTo: ''
    }
];
