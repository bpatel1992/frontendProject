import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { OnInit, Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {}
  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams.returnUrl || "/game";
    this.form = this.fb.group({
      email: ["", Validators.email],
      password: ["", Validators.required],
    });
    /*  if (await this.authService.checkAuthenticated()) {
      await this.router.navigate([this.returnUrl]);
    } */
  }
  onSubmit() {
    if (this.form.valid) {
      try {
        const username = this.form.get("email").value;
        const password = this.form.get("password").value;
        this.authService.login(username, password);
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}
