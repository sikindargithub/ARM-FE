import { HeaderComponent } from './../header/header.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component';

import { LayoutComponent } from './layout.component';
import { AuthService } from 'src/app/user/auth.service';
import { KeycloakService } from 'keycloak-angular';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent, NavbarComponent, HeaderComponent],
      providers: [KeycloakService]
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
