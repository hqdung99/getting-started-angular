import { Mail } from "./mail.model";

export interface MailList {
  primary: Array<Mail>;
  promotions: Array<Mail>;
  social: Array<Mail>;
}

export type MailType = 'primary' | 'social' | 'promotions';
