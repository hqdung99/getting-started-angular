import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AudioRecordingService } from "./audio-recording.service";
import { VideoRecordingService } from "./video-recording.service";
import { RecordMediaComponent } from "./record-media.component";
import { RecordMediaRoutingModule } from "./record-media-routing.module";

@NgModule({
  imports: [
    RecordMediaRoutingModule,
    CommonModule
  ],
  declarations: [RecordMediaComponent],
  exports: [],
  providers: [
    AudioRecordingService,
    VideoRecordingService
  ],
  bootstrap: []
})
export class RecordMediaModule {}
