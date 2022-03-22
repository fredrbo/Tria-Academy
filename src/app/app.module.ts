import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { FileComponent } from './file/file.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MatTableModule } from '@angular/material/table'
import { LoginComponent } from './login/login.component';
import { RecoveryPwdComponent } from './login/recovery-pwd/recovery-pwd.component';
import { FilterComponent } from './dashboard/filter/filter.component';
import { MatButtonModule } from '@angular/material/button';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { ExitComponent } from './header/exit/exit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFileComponent } from './file/new-file/new-file.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UsersComponent,
    FileComponent,
    LoginComponent,
    RecoveryPwdComponent,
    FilterComponent,
    RegisterUserComponent,
    ExitComponent,
    NewFileComponent,
    SnackbarComponent,


  ],
  imports: [
    ButtonsModule,
    MatButtonModule,
    MatDialogModule,
    AlertModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatTableModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(ROUTES),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
