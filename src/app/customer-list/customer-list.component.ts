import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  exportAs: 'customerList'
})
export class CustomerListComponent implements OnInit {
  selectedCustomer: any;

  customers: Customer[]= [
    {customerNo: 1, name: 'Rahuld Dravid', address: 'A', city: 'Banglaore', state: 'Karnataka', country: 'India'},
    {customerNo: 2, name: 'Sachin Tendulkar', address: 'A', city: 'Mumbai', state: 'Maharastra', country: 'India'},
    {customerNo: 3, name: 'Saurrav Ganguly', address: 'A', city: 'Kolkata', state: 'West Bengal', country: 'India'},
    {customerNo: 4, name: 'Mahendra Singh Dhoni', address: 'A', city: 'Ranchi', state: 'Bihar', country: 'India'},
    {customerNo: 5, name: 'Virat Kohli', address: 'A', city: 'Delhi', state: 'Delhi', country: 'India'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
