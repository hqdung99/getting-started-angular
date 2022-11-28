import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Mail, MailList, MailType } from 'src/app/core/models';

interface MailTypeItem {
  type: MailType;
  icon: string;
  title: string;
}

const mailTypeList: Array<MailTypeItem> = [
  {
    type: 'primary',
    icon: 'mail-outline',
    title: 'Primary'
  },
  {
    type: 'promotions',
    icon: 'mail-outline',
    title: 'Promotions'
  },
  {
    type: 'social',
    icon: 'people-outline',
    title: 'Social'
  }
];

@Component({
  selector: 'app-mail-inbox',
  templateUrl: './mail-inbox.component.html'
})
export class MailInboxComponent implements OnInit {
  @Input() currentSelectMail!: Mail | null;
  @Input() mailList!: MailList;
  @Output() selectCurrentMail = new EventEmitter();
  @Output() updateCheckedMail = new EventEmitter();
  @Output() updateStarMail = new EventEmitter();
  @Output() deleteMailList = new EventEmitter();

  mailTypeList = mailTypeList;
  currentTypeMail: MailType = 'primary';

  constructor() { }

  ngOnInit() {
  }

  setCurrentMailType(type: MailType) {
    this.currentTypeMail = type;
  }

}
