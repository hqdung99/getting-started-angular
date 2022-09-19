import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-childComponent',
  templateUrl: './childComponent.component.html',
  styleUrls: ['./childComponent.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(_changes: SimpleChanges) {
  }

}
