import { Routes } from '@angular/router';
import { HomeComponent } from './domains/info/pages/home/home.component';
import { SearchComponent } from './domains/info/pages/search/search.component';
import { AnunciantesComponent } from './domains/anunciantes/pages/anunciantes/anunciantes.component';
import { LayoutComponent } from './domains/shared/pages/layout/layout.component';
import { SubrubroComponent } from './domains/rubros/pages/subrubro/subrubro.component';
import { RubroComponent } from './domains/rubros/pages/rubro/rubro.component';
import { AtencionComponent } from './domains/info/pages/atencion/atencion.component';
import { RecomendadosComponent } from './domains/info/pages/recomendados/recomendados.component';
import { SuscripcionesComponent } from './domains/info/pages/suscripciones/suscripciones.component';
import { ServicioswebComponent } from './domains/info/pages/serviciosweb/serviciosweb.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'rubro/:id',
                component: RubroComponent
            },
            {
                path: 'anunciantes',
                component: AnunciantesComponent
            },
            {
                path: 'subrubro/:id',
                component: SubrubroComponent
            },

            {
                path: 'atencion-al-cliente',
                component: AtencionComponent
            },
            {
                path: 'recomendados',
                component: RecomendadosComponent
            },
            {
                path: 'suscripciones',
                component: SuscripcionesComponent
            },
            {
                path: 'servicios-web',
                component: ServicioswebComponent
            }
        ]
    }
];
