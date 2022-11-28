import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Mail, MailList, MailType } from "../models";
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

  updateMailList(type: MailType, id: any, value: Partial<Mail>) {
    const currentMailList = this.mailListSubject.getValue();
    if (currentMailList?.[type]) {
      const newMailList = {
        ...currentMailList,
        [type]: currentMailList?.[type].map((item) => {
          if (item.id === id) {
            return {
              ...item,
              ...value
            };
          }
          return item;
        })
      };
      this.mailListSubject.next(newMailList);
    }
  }

  deleteMailList(type: MailType, id: any) {
    const currentMailList = this.mailListSubject.getValue();
    if (currentMailList?.[type]) {
      const newMailList = {
        ...currentMailList,
        [type]: currentMailList?.[type].filter((item) => item.id !== id)
      };
      this.mailListSubject.next(newMailList);
    }
  }

}