import { Routes } from "@angular/router";
import { FinanzasPageComponent } from './pages/finanzas-page/finanzas-page.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { PresentationLayoutComponent } from './layout/presentationLayout/presentationLayout.component';
import { andromedaRoutes } from './pages/andromeda-page/andromeda.routes';
import { MirecorridoPageComponent } from './pages/mi-recorrido-page/mi-recorrido-page.component';

export const presentationRoutes: Routes = [
    
    {
        path: '',
        component: PresentationLayoutComponent,
        children: [
            {
                path:'introduction',
                component: IntroductionPageComponent
            },
            {
                path:'andromeda',
                children: andromedaRoutes
            },
            {
                path:'finanzas',
                component: FinanzasPageComponent
            },
            {
                path:'miRecorrido',
                component: MirecorridoPageComponent
            },
            {
                path: '**',
                redirectTo: 'introduction'
            }
        ]
    }
]

export default presentationRoutes