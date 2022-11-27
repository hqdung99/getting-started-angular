import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MailService {
  private currentMailTypeSubject = new BehaviorSubject<string>('INBOX');
  public currentMailType =  this.currentMailTypeSubject.asObservable();

  constructor() {}

  setCurrentMailType(type: string) {
    this.currentMailTypeSubject.next(type);
  }

}