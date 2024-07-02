import { Component } from '@angular/core';
import {BoutonActionComponent} from "../../composants/bouton-action/bouton-action.component";
import {
    DetailMvmtStkArticleComponent
} from "../../composants/detail-mvmt-stk-article/detail-mvmt-stk-article.component";
import {DetailMvmtStkComponent} from "../../composants/detail-mvmt-stk/detail-mvmt-stk.component";
import {PaginationComponent} from "../../composants/pagination/pagination.component";
import {DetailCmdCltFrnComponent} from "../../composants/detail-cmd-clt-frn/detail-cmd-clt-frn.component";
import {DetailCmdComponent} from "../../composants/detail-cmd/detail-cmd.component";

@Component({
  selector: 'app-page-cmd-clt-frn',
  standalone: true,
  imports: [
    BoutonActionComponent,
    DetailMvmtStkArticleComponent,
    DetailMvmtStkComponent,
    PaginationComponent,
    DetailCmdCltFrnComponent,
    DetailCmdComponent
  ],
  templateUrl: './page-cmd-clt-frn.component.html',
  styleUrl: './page-cmd-clt-frn.component.scss'
})
export class PageCmdCltFrnComponent {

}
