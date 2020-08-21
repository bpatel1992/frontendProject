import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  constructor(public snackbar: MatSnackBar) {}

  error(message: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ["background-red"];
    config.verticalPosition = "top";
    config.horizontalPosition = "center";
    setTimeout(() => this.snackbar.open(message, "x", config));
  }
}
