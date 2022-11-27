import {Hero} from "./hero.model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {HeroService} from "./hero.service";
import {AddHero, GetHeroById, GetHeros, UpdateHero} from "./hero.action";
import {catchError, tap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

export class HeroStateModel {
  heros: Hero[];
  hero: Hero;
}

@State<HeroStateModel>({
  name: 'Heros',
  defaults: {
    heros: [],
    hero: null
  }
})

export class HeroState {
  constructor(private heroService: HeroService) {
  }

  @Selector()
  static getHeroList(state: HeroStateModel) {
    return state.heros;
  }

  @Selector()
  static getSelectedHero(state: HeroStateModel) {
    console.log('getselected Hero');
    return state.hero;
  }

  @Action(GetHeros)
  getHeros({getState, setState}: StateContext<HeroStateModel>) {
    return this.heroService.getHeros().pipe(
      tap(response => {
        const state = getState();
        setState({
          ...state,
          heros: response
        });
      }),
      catchError((err: HttpErrorResponse) => {
        console.log('Somthing happened!!');
        return throwError(new Error(err.message));
      })
    );
  }

  @Action(GetHeroById)
  getHeroById(
    {getState, setState, patchState}: StateContext<HeroStateModel>,
    {id}: GetHeroById) {
    return this.heroService.getHero(id).pipe(
      tap(response => {
        const state = getState();
        patchState({
          ...state,
          heros: response
        });
      }),
    );
  }

  @Action(AddHero)
  addHero(
    {getState, patchState}: StateContext<HeroStateModel>,
    {payload}: AddHero) {
    return this.heroService.addHero(payload).pipe(
      tap(response => {
        const state = getState();
        patchState({
          heros: [...state.heros, response]
        });
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(new Error(err.message));
      })
    );
  }

  @Action(UpdateHero)
  updateHero(
    {getState, setState}: StateContext<HeroStateModel>,
    {payload}: UpdateHero){
    const prevState = getState();
    const state = getState();
    const hers = [...state.heros];
    const index = hers.findIndex(item => item.id === payload.id);
    hers[index] = payload;
    setState({
      ...state,
      heros : state.heros
    });
  }

}
