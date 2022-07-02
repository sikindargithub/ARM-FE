import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, HeaderComponent, DropdownComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [LayoutComponent, HeaderComponent]
})
export class SharedModule {}
