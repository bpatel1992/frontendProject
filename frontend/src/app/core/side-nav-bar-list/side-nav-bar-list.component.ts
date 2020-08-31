import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatListItem } from "@angular/material";

@Component({
  selector: "side-nav-bar-list",
  templateUrl: "./side-nav-bar-list.component.html",
  styleUrls: ["./side-nav-bar-list.component.css"],
})
export class SideNavBarListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
