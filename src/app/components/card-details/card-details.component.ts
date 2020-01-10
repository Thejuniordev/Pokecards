import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from 'src/app/services/pokeservice.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  dataCard: Observable<[]>;
  cards: Array<any> = new Array();
  id: any;
  sub: any;

  constructor(private route: ActivatedRoute, private pokeserviceService: PokeserviceService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {

    this.pokeserviceService.cardsDetails().subscribe(data => {
      this.cards = data.cards;
      this.sub = this.route.params.subscribe(param => {
        this.cards.forEach(element => {
        if ( param.id === element.id) {
          console.log('Esse é o elemento do ID: ', element);
          return this.dataCard = element;
        }
      });
    });
    }, err => {
      console.log('Não foi possível listar os cards', err);
    });
  }
}
