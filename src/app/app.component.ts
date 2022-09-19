import { Component, Inject, InjectionToken, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponentComponent } from './childComponent/childComponent.component';

class Item {
  code: number;
  name: string;

  constructor(code: number, name: string) {
    this.code = code;
    this.name = name;
  }
}

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title: string = "Top 5 movies";

  movies: Movie[]=[];

  mTitle:string="";
  mDirector:string="";

  ngOnInit(): void {
    this.Refresh();
  }

  remove(i: any) {
    this.movies.splice(i, 1);
  }

  addMovie() {
    this.movies.push({ title: this.mTitle, director: this.mDirector });
    this.mTitle = "";
    this.mDirector = "";
  }

  Refresh() {
    console.log("refresh");
    this.movies = [
      { title: 'a', director: 'Byron Howard' },
      { title: 'b', director: 'Zack' }
    ];
  }

  trackByFn(_index: any, item: any) {
    return item.title;
  }

  red = 'red';
}

class Movie {
  title!: string;
  director!: string;
}