import { Component } from '@angular/core';
import {BoutonActionComponent} from "../../../composants/bouton-action/bouton-action.component";
import {DetailCltFrnComponent} from "../../../composants/detail-clt-frn/detail-clt-frn.component";
import {PaginationComponent} from "../../../composants/pagination/pagination.component";
import {Router} from "@angular/router";
import {DetailUtilisateurComponent} from "../../../composants/detail-utilisateur/detail-utilisateur.component";

@Component({
  selector: 'app-page-utilisateur',
  standalone: true,
  imports: [
    BoutonActionComponent,
    DetailCltFrnComponent,
    PaginationComponent,
    DetailUtilisateurComponent
  ],
  templateUrl: './page-utilisateur.component.html',
  styleUrl: './page-utilisateur.component.scss'
})
export class PageUtilisateurComponent {
  constructor(
    private router:Router
  ) {
  }

  nouvelUtilisateur() {
    this.router.navigate(['nouvelutilisateur'])

  }
}
