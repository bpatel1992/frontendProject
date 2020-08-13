import { Component, OnInit } from "@angular/core";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { path: "", label: "Home" },
    { path: "login", label: "Login" },
    { path: "register", label: "Register" },
    { path: "probability-calculator", label: "Probability calculator" },
  ];

  constructor() {}

  ngOnInit() {}
}
