import { Component, OnInit } from '@angular/core';

const googleApps = [
  {
    title: "Calendar",
    icon: "assets/images/google_calendar.png"
  },
  {
    title: "Keep",
    icon: "assets/images/google_keep.png"
  },
  {
    title: "Tasks",
    icon: "assets/images/google_tasks.png"
  },
  {
    title: "Contacts",
    icon: "assets/images/google_contacts.png"
  }
];

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html'
})
export class RightBarComponent implements OnInit {
  googleApps = googleApps;

  constructor() { }

  ngOnInit() {
  }

}
