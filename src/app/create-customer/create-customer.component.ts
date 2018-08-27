import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../model/customer';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.data.createCustomer(this.customer).subscribe(
      (result: any) => {
        alert('Customer added.');
        this.router.navigate(['']);
      }
    )
  }
}
