import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { UserDetailsComponent } from "./component/user-details/user-details.component";
import { UserListComponent } from "./component/user-list/user-list.component";
import { LoginComponent } from "./component/user/login/login.component";
import { RegisterComponent } from "./component/user/register/register.component";
import { FileUploadComponent } from "./component/file/file-upload/file-upload.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: DashboardComponent },
  { path: "user-detail", component: UserDetailsComponent },
  { path: "user-list", component: UserListComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "file-upload", component: FileUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
