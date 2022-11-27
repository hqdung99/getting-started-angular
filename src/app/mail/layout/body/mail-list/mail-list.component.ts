import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/core';
import { MailList, MailType } from 'src/app/core/models';

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
]

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html'
})
export class MailListComponent implements OnInit {
  currentTypeList!: string;
  currentTypeMail: MailType = 'primary';
  mailList: MailList = {
    promotions: [],
    social: [],
    primary: []
  };
  mailTypeList = mailTypeList;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.mailService.currentMailType.subscribe((value) => {
      this.currentTypeList = value;
    });
    this.mailService.mailList.subscribe((value) => {
      this.mailList = value;
    });
  }

  setCurrentMailType(type: MailType) {
    this.currentTypeMail = type;
  }

}
