import {ZebraFood} from "./zoo-state";

export class AddAnimal {
  static readonly type = '[Zoo] Add Animal';
  constructor(public name: string) {
  }
}
export class FeedAnimal {
  static readonly type = '[Zoo] feed Animal';
  constructor(public animalsToFeed: string) {}
}

export class FeedZebra {
  static readonly type = '[Zoo] Feed Zebra';
  constructor(public zebraFood: ZebraFood) {
  }
}

export class ZebraToFeed {
  static readonly type = '[Zoo] zebra to be well fed';
  constructor(public zebraFood: ZebraFood) {
  }
}
