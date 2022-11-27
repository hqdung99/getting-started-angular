import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/core';

const mailType = [
  {
    type: 'INBOX',
    title: 'Inbox',
    icon: 'mail-outline'
  },
  {
    type: 'STARRED',
    title: 'Starred',
    icon: 'star-outline'
  },
  {
    type: 'SNOOZED',
    title: 'Snoozed',
    icon: 'logo-snapchat'
  },
  {
    type: 'SENT',
    title: 'Sent',
    icon: 'send-outline'
  },
  {
    type: 'DRAFTS',
    title: 'Drafts',
    icon: 'clipboard-outline'
  }
];

@Component({
  selector: 'app-mail-bar',
  templateUrl: './mail-bar.component.html'
})
export class MailBarComponent implements OnInit {
  listMailType = mailType;
  currentTypeList!: string;
  currentExpand!: boolean;

  constructor(private mailService: MailService) {}

  ngOnInit() {
    this.mailService.currentMailType.subscribe((value) => {
      this.currentTypeList = value;
    });
    this.mailService.expandRightbar.subscribe((value) => {
      this.currentExpand = value;
    });
  }

  selectMailType(type: string) {
    this.mailService.setCurrentMailType(type);
  }
}
