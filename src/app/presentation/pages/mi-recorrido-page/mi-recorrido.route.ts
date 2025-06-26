import { Routes } from "@angular/router";
import { MirecorridoPageComponent } from "./mi-recorrido-page.component";
import { FinanzasPageComponent } from "./finanzas-page/finanzas-page.component";
import { AtechPageComponent } from "./atech-page/atech-page.component";

export const miRecorridoRoutes: Routes = [

    {
        path:'',
        component: MirecorridoPageComponent,
        children: [
            {
                path: 'finanzas',
                component: FinanzasPageComponent
            },
            {
                path: 'atech',
                component: AtechPageComponent
            },
            {
                path: '',
                redirectTo: 'finanzas',
                pathMatch: 'full'
            }
            
        ]
    }

]

export default miRecorridoRoutes