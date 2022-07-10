import { Component, Input, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
export interface DropdownOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input()
  label: string = 'Pick one';

  foods: DropdownOption[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  @Input() parentData: DropdownOption[] = [];
  myControl = new FormControl('');

  filteredOptions!: Observable<DropdownOption[]>;
  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): DropdownOption[] {
    const filterValue = value.toLowerCase();

    return this.foods.filter((food) =>
      food.value.toLowerCase().includes(filterValue)
    );
  }
}
