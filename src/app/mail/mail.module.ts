import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { MailRoutingModule } from "./mail-routing.module";
import {
  HeaderComponent,
  MailBarComponent,
  MailListComponent,
  RightBarComponent,
  MailDetailComponent,
  MailInboxComponent,
  MailStarComponent
} from "./layout";
import { MailComponent } from "./mail.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    MailRoutingModule,
    SharedModule,
    IonicModule
  ],
  declarations: [
    // Main
    MailComponent,
    // layout
    HeaderComponent,
    MailBarComponent,
    MailListComponent,
    RightBarComponent,
    MailDetailComponent,
    MailInboxComponent,
    MailStarComponent
  ]
})
export class MailModule {}
