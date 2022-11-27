import {Hero} from "./hero.model";

export class GetHeros {
  static readonly type = '[Hero] Get';
}

export class GetHeroById{
  static readonly type = '[Hero] GetById';
  constructor(public id: number) {}
}

export class AddHero {
  static readonly type = '[Hero] Add';
  constructor(public payload: Hero) {
  }
}

export class UpdateHero {
  static readonly type = '[Hero] update';
  constructor(public payload: Hero) {
  }
}

export class DeleteHero {
  static readonly type = '[Hero] delete';
  constructor(public payload: Hero) {
  }
}



