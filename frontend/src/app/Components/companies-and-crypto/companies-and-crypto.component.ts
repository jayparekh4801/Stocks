import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Company } from 'src/app/DataModels/Companies';
import { Crypto } from 'src/app/DataModels/Cryptos';
import { CompaniesAndCryptosService } from 'src/app/Services/companies-and-cryptos.service';
@Component({
	selector: 'app-companies-and-crypto',
	templateUrl: './companies-and-crypto.component.html',
	styleUrls: ['./companies-and-crypto.component.css']
})
export class CompaniesAndCryptoComponent implements OnInit {

	constructor(
		private companyAndCryptoService : CompaniesAndCryptosService,
		private router : Router
	) { }

	userCryptos: String[] = [
		"BTC",
		"ETH",
		// "XRP",
		// "BCH",
		// "XLM",
		// "EOS",
		// "LTC",
		// "ADA",
		// "XMR",
		// "UDST"
	];

	userCompanies: String[] = [
		"AAPL",
		"IBM",
		"ADBE",
		// "AMZN",
		// "CSCO",
		// "EBAY",
		// "FB",
		// "FOXA",
		// "GOOGL",
		// "INTC",
		// "MRVL",
		// "MSFT",
		// "NFLX",
		// "NVDA",
		// "PEP",
		// "PYPL",
		// "QCOM",
		// "SBUX",
		// "TSLA",
		// "ZM"
	]

	company : Company = {
		symbol : "",
    	updatedAt : "",
    	information : ""
	}

	// crypto : Crypto = {
	// 	name : "",
    // 	symbol : "",
    // 	// marketName : "",
    // 	updatedAt : "",
    // 	information : ""
	// }

	companies : Company[] = [];
	cryptos : Crypto[] = [];

	title = 'angulardatatables';
  	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject(); 


	ngOnInit() {

		this.dtOptions = {
			pagingType: 'full_numbers',
			pageLength: 2,
			processing: true
		  };
		  this.dtTrigger.next();
		this.userCompanies.forEach(element => {
			this.companyAndCryptoService.getCompanies(element).subscribe((data : any) => {
				this.company.information = data["Meta Data"]["1. Information"];
				this.company.symbol = data["Meta Data"]["2. Symbol"];
				this.company.updatedAt = data["Meta Data"]["3. Last Refreshed"];
				this.companies.push(Object.assign({}, this.company));
			});
		});

		// this.userCryptos.forEach(element => {
		// 	this.companyAndCryptoService.getCryptos(element).subscribe((data : any) => {
		// 		this.crypto.information = data["Meta Data"]["1. Information"];
		// 		this.crypto.symbol = data["Meta Data"]["2. Digital Currency Code"];
		// 		this.crypto.name = data["Meta Data"]["3. Digital Currency Name"];
		// 		this.crypto.marketName = data["Meta Data"]["5. Market Name"];
		// 		this.crypto.updatedAt = data["Meta Data"]["6. Last Refreshed"];
		// 		this.cryptos.push(Object.assign({}, this.crypto));
		// 	})
		// })

	}

	getCompanyDetail(symbol : String){
		this.router.navigate(["/", "company"]);
	}

	getCryptoDetail(symbol : String) {
		this.router.navigate(["/","crypto"]);
	}

}
