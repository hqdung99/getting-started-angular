import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as RecordRTC from 'recordrtc';

@Injectable()
export class VideoRecordingService {
  private mediaStream: any;
  private blob: any;
  private recorder: any = false;
  private _mediaStream = new Subject<any>();
  private _blob = new Subject<any>();

  // Observable
  getMediaStream(): Observable<any> {
    return this._mediaStream.asObservable();
  }

  getBlob(): Observable<any> {
    return this._blob.asObservable();
  }

  startRecording() {
    this.handleRecording();
  }

  async handleRecording() {
    // @ts-ignore
    this.mediaStream = await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: true,
    });
    this._mediaStream.next(this.mediaStream);
    this.recorder = new RecordRTC(this.mediaStream, { type: 'video' });
    this.recorder.startRecording();
  }

  stopRecording() {
    if (!this.recorder) {
      return;
    }
    this.recorder.stopRecording(() => {
      this.blob = this.recorder.getBlob();
      this._blob.next(URL.createObjectURL(this.blob));
      this.mediaStream.stop();
      this.recorder.destroy();
    });
  }

  downloadRecordedVideo() {
    RecordRTC.invokeSaveAsDialog(this.blob, `${Date.now()}.webm`);
  }

  clearVideoRecord() {
    this.mediaStream = null;
    this.blob = null;
    this.recorder = null;
  }
}
