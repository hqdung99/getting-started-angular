import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private mailService: MailService) {}

  ngOnInit() {
  }

  setExpandRightbar() {
    console.log('aaaa');
    this.mailService.setExpandRightbar();
  }

}
