import { NgModule } from "@angular/core";

import {
  MailService,
  ParseJsonService
} from "./services";

@NgModule({
  imports: [],
  providers: [
    MailService,
    ParseJsonService
  ],
  declarations: []
})
export class CoreModule {}
