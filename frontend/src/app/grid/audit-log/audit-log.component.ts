import { Component, OnInit } from "@angular/core";
import { FileUploadComponent } from "src/app/component/file/file-upload/file-upload.component";
import { ActionRenderComponent } from "../action-render/action-render.component";

@Component({
  selector: "audit-log",
  templateUrl: "./audit-log.component.html",
  styleUrls: ["./audit-log.component.css"],
})
export class AuditLogComponent implements OnInit {
  frameworkComponents;
  constructor() {
    this.frameworkComponents = {
      cellRendorComponent: ActionRenderComponent,
    };
  }

  columnDefs = [
    { field: "Action", cellRenderer: "cellRendorComponent" },
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "test" },
    { field: "test2" },
    { field: "test3" },
  ];

  rowData = [
    {
      make: "make",
      model: "Celica",
      price: 35000,
      test: "test",
      test2: "test2",
      test3: "test3",
    },
    {
      make: "make",
      model: "Mondeo",
      price: 32000,
      test: "test",
      test2: "test2",
      test3: "test3",
    },
    {
      make: "make",
      model: "Boxter",
      price: 72000,
      test: "test",
      test2: "test2",
      test3: "test3",
    },
    {
      make: "make",
      model: "Celica",
      price: 35000,
      test: "test",
      test2: "test2",
      test3: "test3",
    },
    {
      make: "make",
      model: "Mondeo",
      price: 32000,
      test: "test",
      test2: "test2",
      test3: "test3",
    },
    {
      make: "make",
      model: "Boxter",
      price: 72000,
      test: "test",
      test2: "test2",
      test3: "test3",
    },
  ];
  ngOnInit() {}
}
