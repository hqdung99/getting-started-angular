import { Component } from "@angular/core";
import { MailService } from "../core";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html'
})
export class MailComponent {
  constructor(private mailService: MailService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.mailService.getMailList();
  }
}