import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { SignUpInfo } from "src/app/component/user/sign-up-info";
import { JwtResponse } from "src/app/component/user/jwt-response";
import * as Constants from "../../common/constants";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private loginUrl = Constants.BaseUrl + Constants.signIn;
  private signupUrl = Constants.BaseUrl + Constants.signUp;
  constructor(private httpClient: HttpClient) {}

  login(email, password): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(
      this.loginUrl,
      { email, password },
      httpOptions
    );
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.httpClient.post<string>(this.signupUrl, info, httpOptions);
  }
}
