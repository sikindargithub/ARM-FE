import { Component, OnInit } from '@angular/core';
import { DropdownOption } from 'src/app/shared/components/dropdown/dropdown.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  foods: DropdownOption[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  
  ngOnInit(): void {
    console.log('inside DashboardComponent ngOnInit');
  }
}
