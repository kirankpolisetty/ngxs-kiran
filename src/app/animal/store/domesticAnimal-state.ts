// import {Action, State, StateContext} from "@ngxs/store";
// import {Injectable} from "@angular/core";
// import {ZooStateModel} from "./zoo-state";
// import {FeedAnimal} from "./animal.actions";
// import {Observable, of} from "rxjs";
//
//
// export interface DomesticAnimalModel {
//   feedAnimals: string[];
// }
//
// class AnimalService {
//   feed(animalsToFeed: string): Observable<string> {
//
//   }
// }
//
// @State<DomesticAnimalModel>({
//   name: 'domesticanimalzoo',
//   defaults: {feedAnimals: []}
//  })
//
// @Injectable()
// export class DomesticAnimalZooState {
//   constructor(private animalService: AnimalService) {
//   }
//
//   @Action(FeedAnimal)
//   async feedAnimals(ctx: StateContext<DomesticAnimalModel>, action: FeedAnimal) {
//     const result =  await this.animalService.feed(action.animalsToFeed);
//     const state = ctx.getState();
//     ctx.setState({
//       ...state,
//        feedAnimals: [...state.feedAnimals, result]
//     });
//
//   }
//
// }
//
//
