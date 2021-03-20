import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { CompaniesAndCryptoComponent } from './Components/companies-and-crypto/companies-and-crypto.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyOrCryptoInfoComponent } from './Components/company-or-crypto-info/company-or-crypto-info.component';
import { CryptoComponent } from './Components/crypto/crypto.component';
import { CompanyComponent } from './Components/company/company.component';
import { CryptoDetailedDataComponent } from './Components/crypto-detailed-data/crypto-detailed-data.component';


@NgModule({
  declarations: [
    AppComponent,
    CompaniesAndCryptoComponent,
    CompanyOrCryptoInfoComponent,
    CryptoComponent,
    CompanyComponent,
    CryptoDetailedDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    // Router,
    // ActivatedRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
