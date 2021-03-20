import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesAndCryptoComponent } from './companies-and-crypto.component';

describe('CompaniesAndCryptoComponent', () => {
  let component: CompaniesAndCryptoComponent;
  let fixture: ComponentFixture<CompaniesAndCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesAndCryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesAndCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
