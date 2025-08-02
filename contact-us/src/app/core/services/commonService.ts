import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<country[]> {
    return this.http.get<country[]>(
      `https://restcountries.com/v3.1/all?fields=name`
    );
  }
}
