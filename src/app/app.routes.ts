import { Routes } from '@angular/router';
import { HomeComponent } from './domains/info/pages/home/home.component';
import { SearchComponent } from './domains/shared/pages/search/search.component';
import { RubrosComponent } from './domains/rubros/pages/rubros/rubros.component';
import { AnunciantesComponent } from './domains/anunciantes/pages/anunciantes/anunciantes.component';
import { LayoutComponent } from './domains/shared/pages/layout/layout.component';
import { SubrubroComponent } from './domains/rubros/pages/subrubro/subrubro.component';

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
                path: 'rubros',
                component: RubrosComponent
            },
            {
                path: 'anunciantes',
                component: AnunciantesComponent
            },
            {
                path: 'subrubro/:id',
                component: SubrubroComponent
            }
        ]
    }
];
