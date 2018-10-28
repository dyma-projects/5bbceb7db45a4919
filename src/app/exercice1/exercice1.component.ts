import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public content: string;
  public conclusion: string;
  public valeur: string;
  constructor() { }

  ngOnInit() {
    this.content = '';
  }

  public afficher() {
    this.conclusion = 'La valeur ' + '\"' + this.content + '\"' + ' est ce qu\'a renseigné par l\'utilisateur' ;
  }

}
