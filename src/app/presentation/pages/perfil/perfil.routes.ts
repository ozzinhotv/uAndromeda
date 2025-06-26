import { Routes } from "@angular/router";
import { PerfilComponent } from "./perfil.component";
import { CertificadosComponent } from "./certificados/certificados.component";
import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { ProyectosComponent } from "./proyectos/proyectos.component";

export const perfilRoutes: Routes = [

    {
        path: '',
        component: PerfilComponent,
        children: [
            {
                path: 'experiencia',
                component: ExperienciaComponent
            },
            {
                path: 'proyectos',
                component: ProyectosComponent
            },
            {
                path: 'certificados',
                component: CertificadosComponent
            },
            {
                path: '',
                redirectTo: 'experiencia',
                pathMatch: 'full'
            }
        ]
    }
]

export default perfilRoutes;