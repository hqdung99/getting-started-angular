import { DatePipe } from '@angular/common';
import { Component, Inject, InjectionToken, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ChildComponentComponent } from './childComponent/childComponent.component';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  toDate: string | null | undefined;
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.toDate = new Date().toLocaleDateString();// this.datePipe.transform(new Date());
  }
}
