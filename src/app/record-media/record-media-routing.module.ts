import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecordMediaComponent } from "./record-media.component";

const routes: Routes = [{
  path: '',
  component: RecordMediaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class RecordMediaRoutingModule {}
