import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSearchPipe } from './user-search.pipe';
import { UserAddReactiveComponent } from './components/user-add-reactive/user-add-reactive.component';
import { UserAddTemplateComponent } from './components/user-add-template/user-add-template.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserFilterPipe } from './user-filter.pipe';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginGuard } from './login-guard';
import { ForgotLoginComponent } from './components/forgot-login/forgot-login.component';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';

import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    UserSearchPipe,
    UserAddReactiveComponent,
    UserAddTemplateComponent,
    UserLoginComponent,
    UserFilterPipe,
    RegistrationComponent,
    ForgotLoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule, 
    ScheduleAllModule, 
    RecurrenceEditorAllModule,   
    NumericTextBoxAllModule,
     DatePickerAllModule, 
     TimePickerAllModule, 
     DateTimePickerAllModule, 
     CheckBoxAllModule, 
     ToolbarAllModule, 
      DropDownListAllModule,
      ContextMenuAllModule, 
     MaskedTextBoxModule, 
      UploaderAllModule, 
      MultiSelectAllModule, 
      TreeViewModule, ButtonAllModule,
       BrowserModule  
  
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
