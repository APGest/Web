import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  customer: Object;

  constructor(private router: Router, private data: DataService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => this.customer = params.id)
  }

  ngOnInit() {
    this.data.getCustomer(this.customer).subscribe(
      data => this.customer = data)
  }
  onSubmit(id) {

    this.data.deleteCustomer(id).subscribe(
      (result: any) => {
        alert('Customer deleted');
        this.router.navigate(['']);
      }
    )
  }

}
