import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "app-action-render",
  templateUrl: "./action-render.component.html",
  styleUrls: ["./action-render.component.css"],
})
export class ActionRenderComponent implements OnInit, ICellRendererAngularComp {
  constructor() {}

  ngOnInit() {}

  agInit(param: any): void {}

  refresh(): boolean {
    return false;
  }
}
