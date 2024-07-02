import { Component } from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {DetailArticleComponent} from "../../../composants/detail-article/detail-article.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {
  DetailMvmtStkArticleComponent
} from "../../../composants/detail-mvmt-stk-article/detail-mvmt-stk-article.component";
import {DetailMvmtStkComponent} from "../../../composants/detail-mvmt-stk/detail-mvmt-stk.component";

@Component({
  selector: 'app-page-mvmtstk',
  standalone: true,
  imports: [
    BoutonActionComponent,
    DetailArticleComponent,
    PaginationComponent,
    DetailMvmtStkArticleComponent,
    DetailMvmtStkComponent
  ],
  templateUrl: './page-mvmtstk.component.html',
  styleUrl: './page-mvmtstk.component.scss'
})
export class PageMvmtstkComponent {

}
