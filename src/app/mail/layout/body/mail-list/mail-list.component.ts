import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/core';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
  currentTypeList!: string;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.mailService.currentMailType.subscribe((value) => {
      this.currentTypeList = value;
    });
  }

}
