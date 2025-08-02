import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import environment from "../../../../../environment.json";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  sendFeedback(feedback: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/contact`, feedback);
  }

  getFeedbacks(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/allforms`);
  }

  deleteFeedback(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
