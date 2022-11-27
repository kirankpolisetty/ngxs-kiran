import {Injectable} from '@angular/core';
import {Hero} from "./hero.model";
import {HEROS} from "./mock-heros";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHandler} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private herosUrl = 'api/heros';
  constructor(public http: HttpClient) { }

  getHeros(): Observable<Hero[]> {
    const heros = of(HEROS);
    return heros;
  }

  getHero(id: number): Observable<Hero[]> {
    const hero = of(HEROS.filter(x => x.id === id));
    return of(HEROS);
  }

  addHero(hero: Hero): Observable<Hero> {

  }
}
