import { ChangeDetectorRef, Component, SimpleChanges, Type, ViewChild } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { AudioRecordingService } from "./audio-recording.service";
import { VideoRecordingService } from "./video-recording.service";

type RecordState = 'NONE' | 'RECORDING' | 'RECORDED';

@Component({
  selector: 'record-media-compoennt',
  templateUrl: './record-media.component.html',
  styleUrls: ['./record-media.component.css']
})
export class RecordMediaComponent {
  @ViewChild('videoElement') videoElement: any;
  isAudioRecording = false;
  audioRecordedTime: any;
  audioBlob: any;
  audioName: any;
  audioBlobUrl: any;
  video: any;
  videoBlobUrl: any;
  state: RecordState = 'NONE';

  constructor(
    private ref: ChangeDetectorRef,
    private audioRecordingService: AudioRecordingService,
    private videoRecordingService: VideoRecordingService,
    private sanitizer: DomSanitizer
  ) {
    // Audio
    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isAudioRecording = false;
      this.ref.detectChanges();
    });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.audioRecordedTime = time;
      this.ref.detectChanges();
    });

    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.audioBlob = data.blob;
      this.audioName = data.title;
      this.audioBlobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      this.ref.detectChanges();
    });

    // Video
    this.videoRecordingService.getMediaStream().subscribe((data) => {
      this.video.srcObject = data;
      this.ref.detectChanges();
    })

    this.videoRecordingService.getBlob().subscribe((data) => {
      this.videoBlobUrl = this.sanitizer.bypassSecurityTrustUrl(data);
      console.log('this.videoBlobUrl: ', this.videoBlobUrl);
      this.video.srcObject = null;
      this.ref.detectChanges();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit(): void {
    this.video = this.videoElement.nativeElement;
  }

  // Video
  startVideoRecording() {
    this.state = 'RECORDING'
    this.videoRecordingService.startRecording();
  }

  stopVideoRecording() {
    this.state = 'RECORDED';
    this.video.srcObject = null;
    this.videoRecordingService.stopRecording();
    this.ref.detectChanges();
  }

  downloadVideoRecorded() {
    this.videoRecordingService.downloadRecordedVideo();
  }

  clearVideoRecord() {
    this.state = 'NONE';
    this.videoRecordingService.clearVideoRecord();
    this.video.srcObject = null;
    this.videoBlobUrl = null;
  }

  // Audio
  startAudioRecording() {
    if (!this.isAudioRecording) {
      this.isAudioRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortAudioRecording() {
    if (this.isAudioRecording) {
      this.isAudioRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopAudioRecording() {
    if (this.isAudioRecording) {
      this.audioRecordingService.stopRecording();
      this.isAudioRecording = false;
    }
  }

  clearAudioRecordedData() {
    this.audioBlobUrl = null;
  }

  downloadAdioRecordedData() {
    this._downloadFile(this.audioBlob, 'audio/webm', this.audioName);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.abortAudioRecording();
  }

  _downloadFile(data: any, type: string, filename: string): any {
    const blob = new Blob([data], { type: type });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = filename;
    anchor.href = url;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}