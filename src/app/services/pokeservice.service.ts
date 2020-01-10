import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {

  cardsUrl = 'https://api.pokemontcg.io/v1/cards/';

  constructor(private http: HttpClient) { }

  cardsListing(): Observable<any> {
    return this.http.get(`${this.cardsUrl}`);
  }

  cardsDetails(): Observable<any> {
    return this.http.get(`${this.cardsUrl}`);
  }


}
