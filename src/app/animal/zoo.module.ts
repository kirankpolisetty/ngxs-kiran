import {NgModule} from "@angular/core";
import {ZooComponent} from "../zoo/zoo.component";
import {NgxsModule} from "@ngxs/store";
import {ZooState} from "./store/zoo-state";

@NgModule({
  declarations: [ZooComponent],
  imports: [
    NgxsModule.forFeature([ZooState]),
  ],
  exports: [ZooComponent]
})

export class ZooModule {}
