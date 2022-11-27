import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MailList } from "../models";
import { ParseJsonService } from "./parse-json.service";

@Injectable()
export class MailService {
  private currentMailTypeSubject = new BehaviorSubject<string>('INBOX');
  public currentMailType =  this.currentMailTypeSubject.asObservable();
  private expandRightBarSubject = new BehaviorSubject<boolean>(false);
  public expandRightbar = this.expandRightBarSubject.asObservable();
  private mailListSubject = new BehaviorSubject<MailList>({
    promotions: [],
    primary: [],
    social: []
  });
  public mailList = this.mailListSubject.asObservable();

  constructor(private parseJsonService: ParseJsonService) {}

  setCurrentMailType(type: string) {
    this.currentMailTypeSubject.next(type);
  }

  setExpandRightbar(expand?: boolean) {
    if (expand !== undefined) {
      this.expandRightBarSubject.next(expand);
    } else {
      this.expandRightBarSubject.next(!this.expandRightBarSubject.getValue());     
    }
  }

  getMailList() {
    this.parseJsonService.getJson('assets/data/mail-list.constant.json').subscribe((data) => {
      this.mailListSubject.next(data);
    })
  }
}