import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent  implements  OnInit{
  public menuProperties: Array<Menu> = [
    {
    id: '1',
    titre:'Tableau de bord',
      icon:'fa-solid fa-chart-line',
    url:'',
    sousMenu: [
      {
        id:'11',
        titre:'vue d\'ensemble',
        icon:'fa-solid fa-chart-pie',
        url: '',
      },
      {
        id:'12',
        titre:'statistiques',
        icon:'fa-solid fa-chart-bar',
        url: 'statistiques',
      }
    ]
  },
    {
      id: '2',
      titre:'Articles',
      icon:'fa-solid fa-boxes',
      url:'',
      sousMenu: [
        {
          id:'21',
          titre:'articles',
          icon:'fa-solid fa-boxes',
          url: 'articles',
        },
        {
          id:'22',
          titre:'Mouvements du stock',
          icon:'fab fa-stack-overflow',
          url: '',
        }
      ]
    },
    {
      id: '3',
      titre:'Clients',
      icon:'fas fa-users',
      url:'',
      sousMenu: [
        {
          id:'31',
          titre:'Clients',
          icon:'fas fa-users',
          url: '',
        },
        {
          id:'32',
          titre:'Commandes clients',
          icon:'fas fa-shopping-basket',
          url: '',
        }
      ]
    },
    {
      id: '4',
      titre:'Fournisseurs',
      icon:'fas fa-users',
      url:'',
      sousMenu: [
        {
          id:'41',
          titre:'Fournisseurs',
          icon:'fas fa-users',
          url: '',
        },
        {
          id:'42',
          titre:'Commandes fournisseurs',
          icon:'fas fa-truck',
          url: '',
        }
      ]
    },
    {
      id: '5',
      titre:'Paramétrages',
      icon:'fas fa-cogs',
      url:'',
      sousMenu: [
        {
          id:'51',
          titre:'Catégories',
          icon:'fas fa-tools',
          url: '',
        },
        {
          id:'52',
          titre:'Utilisateurs',
          icon:'fas fa-users-cog',
          url: '',
        }
      ]
    },

  ];

  constructor(
    private router: Router
  ) {
  }
  ngOnInit(): void {
  }

  navigate(url?: string ) {
    this.router.navigate([url])

  }
}
