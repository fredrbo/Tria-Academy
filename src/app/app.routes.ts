import { Component } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { FilterComponent } from "./dashboard/filter/filter.component"
import { FileComponent } from "./file/file.component"
import { NewFileComponent } from "./file/new-file/new-file.component"
import { LoginComponent } from "./login/login.component"
import { RecoveryPwdComponent } from "./login/recovery-pwd/recovery-pwd.component"
import { RegisterUserComponent } from "./users/register-user/register-user.component"
import { UsersComponent } from "./users/users.component"

export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'login/recoverPwd', component: RecoveryPwdComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/register', component: RegisterUserComponent},
  { path: 'file', component: FileComponent },
  { path: 'file/new-file', component: NewFileComponent },
  { path: 'filter', component: FilterComponent }
]

