import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatIconModule, MatButtonModule, MatSidenavModule, MatTabsModule, MatListModule, MatToolbarModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailsComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
