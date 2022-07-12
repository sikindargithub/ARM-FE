import { RequestListComponent } from './../request/components/request-list/request-list.component';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './components/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BoxContainerComponent } from './components/box-container/box-container.component';
import { MatTableModule } from '@angular/material/table';

const materialModules = [
  ReactiveFormsModule,
  MatAutocompleteModule,
  MatCardModule,
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    HeaderComponent,
    DropdownComponent,
    BoxContainerComponent
  ],
  imports: [CommonModule, materialModules, RouterModule.forChild([])],
  exports: [
    LayoutComponent,
    HeaderComponent,
    DropdownComponent,
    MatTableModule,
    MatIconModule,
    BoxContainerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule {}
