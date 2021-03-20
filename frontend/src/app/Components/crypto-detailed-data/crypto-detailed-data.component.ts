import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoDetailedDataService } from 'src/app/Services/crypto-detailed-data.service';


@Component({
	selector: 'app-crypto-detailed-data',
	templateUrl: './crypto-detailed-data.component.html',
	styleUrls: ['./crypto-detailed-data.component.css']
})
export class CryptoDetailedDataComponent implements OnInit {

	constructor(private route: ActivatedRoute, private cryptoDataService : CryptoDetailedDataService) { }
	symbol : string = "";
	cryptosDetailedData : any;
	ngOnInit() {
		this.symbol = this.route.snapshot.paramMap.get("symbol");
		this.cryptoDataService.getCryptoDetailedData(this.symbol).subscribe((data : any) => {
			this.cryptosDetailedData = data.data;
		})
	}

}
