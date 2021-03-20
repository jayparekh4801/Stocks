import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesAndCryptoComponent } from './Components/companies-and-crypto/companies-and-crypto.component';
import { CompanyOrCryptoInfoComponent } from './Components/company-or-crypto-info/company-or-crypto-info.component';
import { CompanyComponent } from './Components/company/company.component';
import { CryptoDetailedDataComponent } from './Components/crypto-detailed-data/crypto-detailed-data.component';
import { CryptoComponent } from './Components/crypto/crypto.component';

const routes: Routes = [
  { path : "", component : CompaniesAndCryptoComponent },
  { path : "company", component : CompanyComponent },
  { path : "crypto", component : CryptoComponent },
  { path : "crypto/:symbol", component : CryptoDetailedDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
