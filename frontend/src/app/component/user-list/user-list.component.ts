import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  public userList: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUser();
  }
  loadUser() {
    return this.userService.getEmployees().subscribe((users) => {
      console.log("employee=====>" + users.name);
      this.userList = users;
    });
  }
}
