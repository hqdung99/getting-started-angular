import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MailService {
  private currentMailTypeSubject = new BehaviorSubject<string>('INBOX');
  public currentMailType =  this.currentMailTypeSubject.asObservable();
  private expandRightBarSubject = new BehaviorSubject<boolean>(false);
  public expandRightbar = this.expandRightBarSubject.asObservable();

  constructor() {}

  setCurrentMailType(type: string) {
    this.currentMailTypeSubject.next(type);
  }

  setExpandRightbar(expand?: boolean) {
    console.log('expand: ', expand);
    if (expand !== undefined) {
      this.expandRightBarSubject.next(expand);
    } else {
      this.expandRightBarSubject.next(!this.expandRightBarSubject.getValue());     
    }
  }
}