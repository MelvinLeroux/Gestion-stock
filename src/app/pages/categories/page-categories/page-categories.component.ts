import { Component } from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-categories',
  standalone: true,
    imports: [
        BoutonActionComponent,
        DetailArticleComponent,
        PaginationComponent
    ],
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.scss'
})
export class PageCategoriesComponent {

  constructor(
    private router: Router
  ) {
  }

  nouvelleCategorie() {
    this.router.navigate(['nouvellecategorie'])


  }
}
