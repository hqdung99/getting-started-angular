import { NgModule } from "@angular/core";

import { MailRoutingModule } from "./mail-routing.module";
import {
  HeaderComponent,
  MailBarComponent,
  MailListComponent,
  RightBarComponent
} from "./layout";
import { MailComponent } from "./mail.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    MailRoutingModule,
    SharedModule
  ],
  declarations: [
    // Main
    MailComponent,
    // layout
    HeaderComponent,
    MailBarComponent,
    MailListComponent,
    RightBarComponent
  ]
})
export class MailModule {}
