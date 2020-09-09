import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from "@angular/core";
import { TokenStorageService } from "src/app/core/services/token-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
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

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
