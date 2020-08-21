import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as Constants from "../../common/constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private getEmployeesUrl = Constants.BaseUrl + Constants.getEmployees;
  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.httpClient.get(this.getEmployeesUrl);
  }
}
