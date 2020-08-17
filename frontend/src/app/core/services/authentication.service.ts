import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { SignUpInfo } from "src/app/component/user/sign-up-info";
import { JwtResponse } from "src/app/component/user/jwt-response";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private loginUrl = "http://localhost:8200/ecommerce/api/auth/signin";
  private signupUrl = "http://localhost:8200/ecommerce/api/auth/signup";
  constructor(private httpClient: HttpClient) {}

  login(userName, password): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(
      this.loginUrl,
      { userName, password },
      httpOptions
    );
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.httpClient.post<string>(this.signupUrl, info, httpOptions);
  }
}
