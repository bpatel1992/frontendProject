import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { TokenStorageService } from "src/app/core/services/token-storage.service";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  currentUser: string = null;
  navLinks = [
    { path: "home", label: "Home" },
    { path: "user-detail", label: "User Detail" },
    { path: "user-list", label: "User List" },
    { path: "service", label: "Service" },
  ];

  constructor(public authService: TokenStorageService) {}
  ngOnInit() {}

  logout() {
    this.authService.signOut();
  }
}
