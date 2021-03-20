import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOrCryptoInfoComponent } from './company-or-crypto-info.component';

describe('CompanyOrCryptoInfoComponent', () => {
  let component: CompanyOrCryptoInfoComponent;
  let fixture: ComponentFixture<CompanyOrCryptoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyOrCryptoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOrCryptoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
