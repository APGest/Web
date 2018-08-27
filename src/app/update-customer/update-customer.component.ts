import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  customer: Object;

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.customer = params.id)
  }

  ngOnInit() {
    this.data.getCustomer(this.customer).subscribe(
      data => this.customer = data)
  }
  onSubmit(id, customer) {
    this.data.updateCustomer(id,customer).subscribe(
       (result: any) => {
        alert('Customer updated');
         this.router.navigate(['']);
       })
  }

}
