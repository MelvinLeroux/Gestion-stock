import { Component } from '@angular/core';
import {DetailArticleComponent} from "../detail-article/detail-article.component";
import {DetailCmdComponent} from "../detail-cmd/detail-cmd.component";

@Component({
  selector: 'app-nouvelle-cmd-clt-frn',
  standalone: true,
  imports: [
    DetailArticleComponent,
    DetailCmdComponent
  ],
  templateUrl: './nouvelle-cmd-clt-frn.component.html',
  styleUrl: './nouvelle-cmd-clt-frn.component.scss'
})
export class NouvelleCmdCltFrnComponent {

}
