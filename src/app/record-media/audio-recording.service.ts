import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

interface RecordedAudioOutput {
  blob: Blob;
  title: string;
}

@Injectable()
export class AudioRecordingService {
  // private stream;
  // private recorder;
  // private interval;
  // private startTime;
  private _recorded = new Subject<RecordedAudioOutput>();
  private _recordingTime = new Subject<string>();
  private _recordingFailed = new Subject<string>()
}
