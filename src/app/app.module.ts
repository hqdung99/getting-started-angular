import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './childComponent/childComponent.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CounterComponent } from './counter/counter.component';
import { TtClassDirective } from './directives/tt-class.directive';
import { ttIfDirective } from './directives/tt-if.directive';
import { TtToggleDirective } from './directives/TtToggleDirective.directive';
import { TtToolTipDirective } from './directives/TtTooltipDirective.directive';
import { TempConvertorPipe } from './pipes/temp-convertor.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [				
    AppComponent,
    ChildComponentComponent,
    CustomerListComponent,
    CounterComponent,
    TtClassDirective,
    ttIfDirective,
    TtToggleDirective,
    TtToolTipDirective,
    TempConvertorPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
