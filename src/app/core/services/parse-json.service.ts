import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ParseJsonService {
  constructor(
    private http: HttpClient
  ) {}

  getJson(path: string): Observable<any> {
    return this.http.get(path);
  }
}