import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { OnInit, Component } from "@angular/core";
import { TokenStorageService } from "src/app/core/services/token-storage.service";
import { SnackbarService } from "src/app/common/alert/snackbar.service";

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
  public isSpinnerEnable: boolean;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private tokenStorage: TokenStorageService,
    private snackbarService: SnackbarService
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      username: ["", Validators.email],
      password: ["", Validators.required],
    });
  }
  onSubmit() {
    this.isSpinnerEnable = true;
    if (this.form.valid) {
      try {
        const username = this.form.get("username").value;
        const password = this.form.get("password").value;
        this.authService.login(username, password).subscribe(
          (resp) => {
            this.isSpinnerEnable = false;
            this.tokenStorage.saveToken(resp.accessToken);
            this.tokenStorage.saveUsername(resp.username);
            this.router.navigate(["/home"]);
          },
          (error) => {
            this.isSpinnerEnable = false;
            this.snackbarService.error("Bad Credencial...!!");
            this.router.navigate(["login"]);
          }
        );
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
    this.isSpinnerEnable = false;
  }
}
