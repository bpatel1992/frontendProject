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
    { path: "", label: "Home" },
    { path: "login", label: "Login" },
    { path: "register", label: "Register" },
    { path: "probability-calculator", label: "Probability calculator" },
  ];

  constructor(public authService: TokenStorageService) {}
  ngOnInit() {}

  logout() {
    this.authService.signOut();
  }
}
