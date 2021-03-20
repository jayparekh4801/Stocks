import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoDetailedDataComponent } from './crypto-detailed-data.component';

describe('CryptoDetailedDataComponent', () => {
  let component: CryptoDetailedDataComponent;
  let fixture: ComponentFixture<CryptoDetailedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoDetailedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDetailedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
