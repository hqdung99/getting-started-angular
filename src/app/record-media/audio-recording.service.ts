import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import* as RecordRTC from "recordrtc";
import * as moment from "moment";

interface RecordedAudioOutput {
  blob: Blob;
  title: string;
}

@Injectable()
export class AudioRecordingService {
  private stream: any;
  private recorder: any;
  private interval: any;
  private startTime: any;
  private _recorded = new Subject<RecordedAudioOutput>();
  private _recordingTime = new Subject<string>();
  private _recordingFailed = new Subject<string>()

  getRecordedBlob(): Observable<RecordedAudioOutput> {
    return this._recorded.asObservable();
  }

  getRecordedTime(): Observable<string> {
    return this._recordingTime.asObservable();
  }

  recordingFailed(): Observable<string> {
    return this._recordingFailed.asObservable();
  }

  startRecording() {
    if (this.recorder) {
      // It means recording is already started
      return;
    }
    this._recordingTime.next('00:00');
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((s) => {
        this.stream = s;
        this.record();
      })
      .catch((error) => {
        this._recordingFailed.next();
      });
  }

  private record() {
    this.recorder = new RecordRTC.StereoAudioRecorder(this.stream, {
      type: 'audio',
      mimeType: 'audio/webm'
    });

    this.recorder.record();
    this.startTime = moment();
    this.interval = setInterval(() => {
      const currentTime = moment();
      const diffTime = moment.duration(currentTime.diff(this.startTime));
      const time = this.toString(diffTime.minutes()) +
        ':' +
        this.toString(diffTime.seconds());
      this._recordingTime.next(time);
    }, 500);
  }

  private toString(value: any) {
    let val = value;
    if (!value) {
      val = '00';
    }
    if (value < 10) {
      val = '0' + value;
    }
    return val;
  }

  abortRecording() {
    this.stopMedia();
  }

  stopRecording() {
    if (this.recorder) {
      this.recorder.stop(
        (blob: any) => {
          if (this.startTime) {
            const audioFileName = encodeURIComponent(
              'audio_' + new Date().getTime() + '.webm'
            );
            this.stopMedia();
            this._recorded.next({ blob: blob, title: audioFileName });
          }
        },
        () => {
          this.stopMedia();
          this._recordingFailed.next();
        }
      )
    }
  }

  private stopMedia() {
    if (this.recorder) {
      this.recorder = null;
      clearInterval(this.interval);
      this.startTime = null;
      if (this.stream) {
        this.stream.getAudioTracks().forEach((track: any) => track.stop());
        this.stream = null;
      }
    }
  }
}
