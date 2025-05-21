import { Routes } from "@angular/router";
import { AndromedaPageComponent } from "./andromeda-page.component";
import { ConectiumPageComponent } from "./pages/conectium-page/conectium-page.component";
import { HoladocComponent } from "./pages/holadoc/holadoc.component";
import { EkiipagoComponent } from "./pages/ekiipago/ekiipago.component";
import { PeregrinaComponent } from "./pages/peregrina/peregrina.component";
import { BalsamalComponent } from "./pages/balsamal/balsamal.component";
import { SpinmovilComponent } from "./pages/spinmovil/spinmovil.component";
import { AndromedaVenturesComponent } from "./pages/andromeda-ventures/andromeda-ventures.component";
import { BrainboxComponent } from "./pages/brainbox/brainbox.component";

export const andromedaRoutes: Routes = [

    {
        path:'',
        component: AndromedaPageComponent,
        children: [
            {
                path: '',
                redirectTo: 'andromeda',
                pathMatch: 'full'
            },
            {
                path:'conectium',
                component: ConectiumPageComponent
            },
            {
                path:'holadoc',
                component: HoladocComponent
            },
            {
                path:'ekiipago',
                component: EkiipagoComponent
            },
            {
                path:'peregrina',
                component: PeregrinaComponent
            },
            {
                path:'balsamal',
                component: BalsamalComponent
            },
            {
                path:'spinmovil',
                component: SpinmovilComponent
            },
            {
                path:'andromeda',
                component: AndromedaVenturesComponent
            },
            {
                path:'brainbox',
                component: BrainboxComponent
            },
        ]
    }

]

export default andromedaRoutes