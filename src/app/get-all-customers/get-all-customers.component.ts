import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.scss']
})
export class GetAllCustomersComponent implements OnInit {

  customers$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAllCustomers().subscribe(
      data => this.customers$ = data
    )
  }
}
