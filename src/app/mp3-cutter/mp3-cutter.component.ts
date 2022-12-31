import { Component } from '@angular/core';
// @ts-ignore
// import MP3Cutter from 'mp3-cutter';

@Component({
  selector: 'app-mp3-cutter',
  templateUrl: './mp3-cutter.component.html',
})
export class Mp3CutterComponent {
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  cutMp3File(event: any) {
    console.log('event: ', event.target.files[0]);
  }
}
