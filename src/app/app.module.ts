import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GetAllCustomersComponent,
    GetCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    CreateCustomerComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
