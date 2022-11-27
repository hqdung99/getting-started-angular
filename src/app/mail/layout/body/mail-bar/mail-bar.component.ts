import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/core';

const mailType = [
  {
    type: 'INBOX',
    title: 'Inbox'
  },
  {
    type: 'STARRED',
    title: 'Starred'
  },
  {
    type: 'SNOOZED',
    title: 'Snoozed'
  },
  {
    type: 'SENT',
    title: 'Sent'
  },
  {
    type: 'DRAFTS',
    title: 'Drafts'
  }
];

@Component({
  selector: 'app-mail-bar',
  templateUrl: './mail-bar.component.html',
  styleUrls: ['./mail-bar.component.scss']
})
export class MailBarComponent implements OnInit {
  listMailType = mailType;

  constructor(private mailService: MailService) {}

  ngOnInit() {}

  selectMailType(type: string) {
    this.mailService.setCurrentMailType(type);
  }

}
