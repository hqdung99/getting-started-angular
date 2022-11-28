import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MailService } from 'src/app/core';
import { Mail, MailList, MailType } from 'src/app/core/models';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html'
})
export class MailListComponent implements OnInit {
  currentTypeList!: string;
  mailList: MailList = {
    promotions: [],
    social: [],
    primary: []
  };
  currentSelectMail: Mail | null = null;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.mailService.currentMailType.subscribe((value) => {
      this.currentTypeList = value;
    });
    this.mailService.mailList.subscribe((value) => {
      this.mailList = value;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  updateStarMail(type: MailType, id: any, star: boolean) {
    this.mailService.updateMailList(type, id, { star: star });
  }

  deleteMailList(type: MailType, id: any) {
    this.mailService.deleteMailList(type, id);
  }

  updateCheckedMail(type: MailType, id: any, checked: boolean) {
    this.mailService.updateMailList(type, id, { checked });
  }

  selectCurrentMail(mail: Mail | null) {
    this.currentSelectMail = mail;
  }

}
