import { Routes } from "@angular/router";
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { PresentationLayoutComponent } from './layout/presentationLayout/presentationLayout.component';
import { andromedaRoutes } from './pages/andromeda-page/andromeda.routes';
import { UAndromedaComponent } from "./pages/u-andromeda/u-andromeda.component";
import miRecorridoRoutes from "./pages/mi-recorrido-page/mi-recorrido.route";
import perfilRoutes  from "./pages/perfil/perfil.routes";



export const presentationRoutes: Routes = [
  {
    path: '',
    component: PresentationLayoutComponent,
    children: [
      {
        path: 'introduction',
        component: IntroductionPageComponent
      },
      {
        path: 'andromeda',
        children: andromedaRoutes
      },
      {
        path: 'miRecorrido',
        children: miRecorridoRoutes
      },
      {
        path: 'u-andromeda',
        component: UAndromedaComponent
      },
      {
        path: 'perfil',
        children: perfilRoutes
      },
      {
        path: '**',
        redirectTo: 'introduction'
      }
    ]
  }
];

export default presentationRoutes;
