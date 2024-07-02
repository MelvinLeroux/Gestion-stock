import { Component } from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {DetailCltFrnComponent} from "../../../composants/detail-clt-frn/detail-clt-frn.component";

@Component({
  selector: 'app-page-client',
  standalone: true,
  imports: [
    BoutonActionComponent,
    DetailArticleComponent,
    PaginationComponent,
    DetailCltFrnComponent
  ],
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.scss'
})
export class PageClientComponent {

}
