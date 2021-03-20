import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { CompanyStock } from 'src/app/DataModels/CompanyStocksDetail';
import { CompaniesAndCryptosService } from 'src/app/Services/companies-and-cryptos.service';

@Component({
	selector: 'app-company-or-crypto-info',
	templateUrl: './company-or-crypto-info.component.html',
	styleUrls: ['./company-or-crypto-info.component.css']
})
export class CompanyOrCryptoInfoComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private companyAndCryptoService : CompaniesAndCryptosService
	) { }
	
	symbol : String = "";

	companyStock : CompanyStock = {
		open : "",
        high : "",
        low : "",
        close : "",
        volume : ""
	}

	companyStocks : CompanyStock[] = [];

	companyStockResponse : any;

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
		  
		this.symbol = this.route.snapshot.paramMap.get("symbol");
		this.companyAndCryptoService.getCompanies(this.symbol).subscribe((data : any) => {
			this.companyStockResponse = data["Time Series (5min)"];
			console.log(this.companyStockResponse);
		});

		for(let key of this.companyStockResponse) {
			this.companyStock.open = this.companyStockResponse[key]["1. open"];
			this.companyStock.high = this.companyStockResponse[key]["2. high"];
			this.companyStock.low = this.companyStockResponse[key]["3. low"];
			this.companyStock.close = this.companyStockResponse[key]["4. close"];
			this.companyStock.volume = this.companyStockResponse[key]["5. volume"];
			this.companyStocks.push(Object.assign({}, this.companyStock))
		}
		console.log(this.companyStocks);
	}

}
