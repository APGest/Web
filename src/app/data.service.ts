import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './model/customer';
import {HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

readonly httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type' : 'application/JSON',
    'Auth' : 'NoAuth'
  })
}

  constructor(private http: HttpClient) { }

  getAllCustomers() {
    return this.http.get('http://localhost:56373/api/values')
  }
  getCustomer(id) {
    return this.http.get('http://localhost:56373/api/values/' + id)
  }
  createCustomer(customer: Customer) {
    return this.http.post<Customer>('http://localhost:56373/api/values/', customer)
  }
  updateCustomer(  id,updatedCustomer: Customer) {
    return this.http.put<Customer>('http://localhost:56373/api/values/'+ id +'/', updatedCustomer )
  }
  deleteCustomer(customerId) {
    return this.http.delete('http://localhost:56373/api/values/' + customerId)
  }
}
