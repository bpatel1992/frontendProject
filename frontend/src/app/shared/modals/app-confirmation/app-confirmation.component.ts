import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "app-app-confirmation",
  templateUrl: "./app-confirmation.component.html",
  styleUrls: ["./app-confirmation.component.css"],
})
export class AppConfirmationComponent implements OnInit {
  public id: string;
  public confirmationMsg: string = "Are you sure!";
  public operationFailureMsg: string = "problem with deletion.";
  public isDeleteEnable: boolean;
  constructor(
    public dialogRef: MatDialogRef<AppConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private userService: UserService
  ) {
    this.id = data.userId;
    this.isDeleteEnable = true;
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(
      (user) => {
        this.router.navigate(["/user-list"]);
      },
      (error) => {
        this.router.navigate(["/user-list"]);
        this.isDeleteEnable = true;
      }
    );
    this.dialogRef.close();
  }

  ngOnInit() {}
}
