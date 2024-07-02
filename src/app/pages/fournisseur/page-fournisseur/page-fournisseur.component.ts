import { Component } from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {DetailCltFrnComponent} from "../../../composants/detail-clt-frn/detail-clt-frn.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";

@Component({
  selector: 'app-page-fournisseur',
  standalone: true,
    imports: [
        BoutonActionComponent,
        DetailCltFrnComponent,
        PaginationComponent
    ],
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.scss'
})
export class PageFournisseurComponent {

}
