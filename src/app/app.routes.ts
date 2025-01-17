import { Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMvmtstkComponent} from "./pages/mvmtstk/page-mvmtstk/page-mvmtstk.component";
import {PageClientComponent} from "./pages/client/page-client/page-client.component";

export const routes: Routes = [
  {
    path : 'login',
    component : PageLoginComponent
  },
  {
    path: 'inscription',
    component : PageInscriptionComponent
  },
  {
    path: '',
    component : PageDashboardComponent,
    children:  [
      {
        path : 'statistiques',
        component : PageStatistiquesComponent
      },
      {
        path: 'articles',
        component: PageArticleComponent

      },
      {
        path: 'nouvel-article',
        component: NouvelArticleComponent
      },
      {
        path:'mvmtstk',
        component: PageMvmtstkComponent
      },
      {
        path:'clients',
        component: PageClientComponent
      }
    ]
  }
];
