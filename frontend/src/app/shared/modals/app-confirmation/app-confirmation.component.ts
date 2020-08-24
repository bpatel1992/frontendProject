import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";
import { Location } from "@angular/common";
import { ModalService } from "../../services/modal.service";
import { getEmployeeById } from "src/app/common/constants";
import { Observable } from "rxjs";
import { User } from "src/app/component/user-list/user";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-confirmation",
  templateUrl: "./app-confirmation.component.html",
  styleUrls: ["./app-confirmation.component.css"],
})
export class AppConfirmationComponent implements OnInit {
  public enableEditModal: boolean;
  public enableDeleteModal: boolean;
  public employeeDetails: Observable<User>;
  public employee_form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AppConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private modalService: ModalService,
    private fb: FormBuilder
  ) {
    if (modalData.name == "updateEmployee") {
      this.enableDeleteModal = false;
      this.enableEditModal = true;
      this.getEmployeeById(modalData.employeeId);
    } else {
      this.enableEditModal = false;
      this.enableDeleteModal = true;
    }
  }

  actionFunction() {
    this.modalService.modalAction(this.modalData);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.employee_form = this.fb.group({
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
      department: ["", [Validators.required]],
      country: ["", [Validators.required]],
      city: ["", [Validators.required]],
      gender: ["", [Validators.required]],
    });
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.employee_form.controls[controlName].hasError(errorName);
  };

  getEmployeeById(employeeId: string) {
    this.modalService.getEmployeeById(employeeId).subscribe((employee) => {
      this.employee_form = this.fb.group({
        name: [employee.name, [Validators.required]],
        age: [employee.age, [Validators.required]],
        department: [employee.department, [Validators.required]],
        country: [employee.country, [Validators.required]],
        city: [employee.city, [Validators.required]],
        gender: [employee.gender, [Validators.required]],
      });
    });
  }

  updateEmployee() {
    console.log(this.employee_form.value.name);
    let user: User = {
      id: this.modalData.employeeId,
      name: this.employee_form.value.name,
      age: this.employee_form.value.age,
      city: this.employee_form.value.city,
      department: this.employee_form.value.department,
      country: this.employee_form.value.country,
      gender: this.employee_form.value.gender,
    };
    this.modalService.updateEmployee(user).subscribe(
      (employee) => {
        alert("employee update--");
        window.location.reload();
      },
      (error) => {
        console.log("error with updation---");
      }
    );
  }
}
