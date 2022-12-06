import { NgModule } from "@angular/core";
import { Mp3CutterRoutingModule } from "./mp3-cutter-routing.module";
import { Mp3CutterComponent } from "./mp3-cutter.component";

@NgModule({
  imports: [
    Mp3CutterRoutingModule
  ],
  declarations: [
    Mp3CutterComponent
  ]
})
export class Mp3CutterModule {}
