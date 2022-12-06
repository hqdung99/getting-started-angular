import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Mp3CutterComponent } from "./mp3-cutter.component";

const routes: Routes = [{
  path: '',
  component: Mp3CutterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mp3CutterRoutingModule {}
