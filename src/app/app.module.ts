import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { RouterModule  } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
=======
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { ApState, INISTATE, rootReducer } from './store';
>>>>>>> 81b3d5e (Projakt-IT255-V01)

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminsService } from './admins.service';
import { AdminUsernameService } from './admin-username.service';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { EmployeeService } from './employee.service';
import { EmployeeFilterPipe } from './employeeslist/employee-filter.pipe';
import { EmployeinfoComponent } from './employeinfo/employeinfo.component';
import { EmployeesService } from './employees.service';




<<<<<<< HEAD
=======

>>>>>>> 81b3d5e (Projakt-IT255-V01)
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    AdminpanelComponent,
    AdminNavBarComponent,
    EmployeesComponent,
    EmployeeslistComponent,
    EmployeeFilterPipe,
    EmployeinfoComponent
<<<<<<< HEAD
    
=======

>>>>>>> 81b3d5e (Projakt-IT255-V01)
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    
    RouterModule.forRoot([
       
    {path:"", component: HomeComponent},
    {path:"adminform", component: AdminComponent},
    {path:"login", component: LoginComponent},
    {path:"adminpanel", component: AdminpanelComponent},
    {path: "employees", component: EmployeesComponent},
    {path: "employeeslist", component: EmployeeslistComponent},
    {path: "employeinfo/:empId", component: EmployeinfoComponent}
    
=======
    NgReduxModule,

    RouterModule.forRoot([

      { path: "", component: HomeComponent },
      { path: "adminform", component: AdminComponent },
      { path: "login", component: LoginComponent },
      { path: "adminpanel", component: AdminpanelComponent },
      { path: "employees", component: EmployeesComponent },
      { path: "employeeslist", component: EmployeeslistComponent },
      { path: "employeinfo/:empId", component: EmployeinfoComponent }

>>>>>>> 81b3d5e (Projakt-IT255-V01)
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AdminsService, AdminUsernameService, EmployeeService, EmployeesService],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule {

  constructor(_ngredux: NgRedux<ApState>) {

   _ngredux.configureStore(rootReducer, INISTATE);

  }

}
>>>>>>> 81b3d5e (Projakt-IT255-V01)
