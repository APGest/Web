import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.scss']
})
export class GetCustomerComponent implements OnInit {

  customer$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.customer$ = params.id)
  }

  ngOnInit() {
    this.data.getCustomer(this.customer$).subscribe(
      data => this.customer$ = data)
  }

}
