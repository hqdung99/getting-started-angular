import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Mail } from 'src/app/core/models';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './mail-detail.component.html'
})
export class MailDetailComponent implements OnInit {
  @Input() currentSelectMail!: Mail | null | undefined;
  @Output() selectCurrentMail = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  selectMail() {
    this.selectCurrentMail.emit(null);
  }

}
