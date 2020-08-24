import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";
import { UserService } from "src/app/core/services/user.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AppModalComponent } from "src/app/common/modals/app-modal/app-modal.component";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  public employeeList: Observable<User[]>;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadEmployee();
  }
  loadEmployee() {
    return this.userService.getEmployees().subscribe((employees) => {
      this.employeeList = employees;
    });
  }

  public editEmployee(employeeId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "app-confirmation";
    dialogConfig.data = {
      name: "updateEmployee",
      title: "Are you sure you want to delete this product?",
      description:
        "If you continue, the product with ID " + +" will be deleted.",
      actionButtonText: "Delete",
      employeeId: employeeId,
    };
    const modalDialog = this.dialog.open(AppModalComponent, dialogConfig);
  }

  public deleteEmployee(employeeId: number) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "app-confirmation";
    //dialogConfig.height = "350px";
    //dialogConfig.width = "600px";
    dialogConfig.data = {
      name: "deleteEmployee",
      title: "Are you sure you want to delete this product?",
      description:
        "If you continue, the product with ID " +
        employeeId +
        " will be deleted.",
      actionButtonText: "Delete",
      employeeId: employeeId,
    };
    const modalDialog = this.dialog.open(AppModalComponent, dialogConfig);
  }
}
