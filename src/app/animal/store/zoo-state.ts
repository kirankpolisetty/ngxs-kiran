import {Injectable} from "@angular/core";
import {Action, Actions, State, StateContext} from "@ngxs/store";
import {FeedAnimal, FeedZebra, ZebraToFeed} from "./animal.actions";

export interface ZooStateModel {
  zebraFood: ZebraFood[];
}

export interface ZebraFood {
  name: string;
  hay: number;
  carrots: number;
}

@State<ZooStateModel>({
  name: 'zoo',
  defaults: {zebraFood: []}
})

@Injectable()
export class ZooState {
  @Action(FeedZebra)
  feedZebra(ctx: StateContext<ZooStateModel>, action: FeedZebra) {
    const state = ctx.getState();
    ctx.patchState({
      zebraFood: [
        ...state.zebraFood,
        action.zebraFood
      ]
    });
  }
}

