import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllCustomersComponent } from './get-all-customers/get-all-customers.component';
import { GetCustomerComponent } from './get-customer/get-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';

const routes: Routes = [
  {
    path: '',
    component: GetAllCustomersComponent
  },
  {
    path: 'customer/:id',
    component: GetCustomerComponent
  },
  {
    path: 'createCustomer',
    component: CreateCustomerComponent
  },
  {
    path: 'updateCustomer/:id',
    component: UpdateCustomerComponent
  },
  {
    path: 'deleteCustomer/:id',
    component: DeleteCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
