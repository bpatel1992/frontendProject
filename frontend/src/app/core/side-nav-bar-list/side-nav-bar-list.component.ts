import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatListItem } from "@angular/material";
import { TokenStorageService } from "../services/token-storage.service";

@Component({
  selector: "app-nav",
  templateUrl: "./side-nav-bar-list.component.html",
  styleUrls: ["./side-nav-bar-list.component.css"],
})
export class SideNavBarListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  constructor(public authService: TokenStorageService) {}
  ngOnInit() {}
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
