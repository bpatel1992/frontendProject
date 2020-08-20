import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";
import { UserService } from "src/app/core/services/user.service";
import { AppConfirmationComponent } from "src/app/shared/modals/app-confirmation/app-confirmation.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  public userList: Observable<User[]>;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadUser();
  }
  loadUser() {
    return this.userService.getEmployees().subscribe((users) => {
      this.userList = users;
    });
  }

  public editUser(id: number) {
    alert("id is===" + id);
  }

  public deleteUser(id: number) {
    const dialogRef = this.dialog.open(AppConfirmationComponent, {
      width: "250px",
      data: { userId: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
