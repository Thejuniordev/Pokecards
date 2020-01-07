import { PokeserviceService } from './../../services/pokeservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card-lists',
  templateUrl: './card-lists.component.html',
  styleUrls: ['./card-lists.component.scss']
})
export class CardListsComponent implements OnInit {

  cards: Array<any> = new Array();
  searchText: string;
  loupeImage = '../../../assets/images/loupe.svg';

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
