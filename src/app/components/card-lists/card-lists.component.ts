import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { PokeserviceService } from './../../services/pokeservice.service';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card-lists',
  templateUrl: './card-lists.component.html',
  styleUrls: ['./card-lists.component.scss']
})
export class CardListsComponent implements OnInit {

  cards: Array<any> = new Array();
  searchText: string;

  constructor(private pokeserviceService: PokeserviceService) { }

  ngOnInit() {
    this.listingCards();
  }

  listingCards() {
    this.pokeserviceService.cardsListing().subscribe(data => {
      this.cards = data.cards;
    }, err => {
      console.log('Não foi possível listar os cards', err);
    });
  }

}
