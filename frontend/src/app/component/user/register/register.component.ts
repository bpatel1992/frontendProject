import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Location } from "@angular/common";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { SignUpInfo } from "../sign-up-info";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  public ownerForm: FormGroup;
  public user: SignUpInfo;
  public form: any = {};

  constructor(
    private location: Location,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ownerForm = new FormGroup({
      firstName: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.maxLength(10),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.maxLength(8),
      ]),
      dateOfBirth: new FormControl(new Date()),
      address: new FormControl("", [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  };

  public onCancel = () => {
    this.location.back();
  };

  public createOwner = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  };

  private executeOwnerCreation = (ownerFormValue) => {
    let owner: SignUpInfo = {
      firstName: ownerFormValue.firstName,
      lastName: ownerFormValue.lastName,
      email: ownerFormValue.email,
      password: ownerFormValue.password,
      address: ownerFormValue.address,
    };

    this.authService.signUp(owner).subscribe(
      (res) => {
        //this is temporary, until we create our dialogs
        this.router.navigate["login"];
      },
      (error) => {
        //temporary as well
        this.location.back();
      }
    );
  };
}