import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/Services/crypto.service';
import { Crypto } from 'src/app/DataModels/Cryptos';
import { Router } from '@angular/router';
import { CryptoDetailedDataService } from 'src/app/Services/crypto-detailed-data.service';
@Component({
	selector: 'app-crypto',
	templateUrl: './crypto.component.html',
	styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

	constructor(private cryptoService: CryptoService, private router : Router, private cryptoDataService : CryptoDetailedDataService) {
		setInterval(() => {
			this.cryptosPrevious = this.cryptosRecent;
			this.getData().then(data => {
				if (data) {
					if (this.cryptosPrevious.length != 0) {
						console.log(this.cryptosPrevious, this.cryptosRecent);
						this.compareData();
						this.saveData();
					}

				}
			});
		}, 600000);
		// setInterval(() => {this.mergeData()}, 70500);
		// setInterval(() => {this.saveData()}, 71000);
	}

	userCryptos: string[] = [
		"BTC",
		"ETH",
		"XRP",
		"BCH",
		"XLM",
		"EOS",
		"LTC",
		"ADA",
		"XMR"
	];

	crypto: Crypto = {
		name: "",
		symbol: "",
		max_supply: 0,
		image: "",
		rate: 0,
		isChanged: "same",
		time : 0
	}

	cryptosRecent: Crypto[] = [];
	cryptosPrevious: Crypto[] = [];

	updatedAt: Number = 0;
	cryptoDetailsResponse: any;
	cryptoPriceResponse: any;
	ngOnInit() {
		this.getData().then(data => {
			if (data) {
				if (this.cryptosPrevious.length != 0) {
					this.compareData();
				}
			}
		});
	}

	compareData() {

		for (let i = 0; i < this.cryptosRecent.length; i++) {
			if (this.cryptosRecent[i].rate > this.cryptosPrevious[i].rate) {
				this.cryptosRecent[i].isChanged = "increase";
			}

			else if (this.cryptosRecent[i].rate < this.cryptosPrevious[i].rate) {
				this.cryptosRecent[i].isChanged = "decrease";
			}
		}
	}

	saveData() {
		this.cryptoDataService.saveCryptoData(this.cryptosRecent).subscribe((data) => {
			console.log(data);
		})
	}

	getCryptoDetailData() {
		return new Promise((resolve) => {
			this.cryptoService.getCryptoDetails().subscribe((data: any) => {
				resolve(data["crypto"]);
			});
		});
	}

	getCryptoPriceData() {
		return new Promise((resolve) => {
			this.cryptoService.getCryptoPrice(this.userCryptos).subscribe((data: any) => {
				this.updatedAt = data["timestamp"];
				resolve(data["rates"]);
			});
		});
	}

	getData() {

		return new Promise((resolve) => {
			this.getCryptoDetailData().then(data => {
				console.log(data);
				this.cryptoDetailsResponse = data;
				this.cryptosRecent = [];
				for (let key in this.cryptoDetailsResponse) {
					if (this.userCryptos.includes(key)) {
						this.crypto.name = this.cryptoDetailsResponse[key]["name"];
						this.crypto.symbol = this.cryptoDetailsResponse[key]["symbol"];
						this.crypto.max_supply = this.cryptoDetailsResponse[key]["max_supply"];
						this.crypto.image = this.cryptoDetailsResponse[key]["icon_url"];
						this.crypto.rate = this.cryptoPriceResponse[key]
						this.crypto.time = this.updatedAt;
						this.cryptosRecent.push(Object.assign({}, this.crypto))
					}
				}
				resolve(true);
			});

			this.getCryptoPriceData().then(data => {
				console.log(data);
				this.cryptoPriceResponse = data;
			})
		});
	}

	getDetailedCryptoData(symbol : String) {
		this.router.navigate(["/crypto", symbol]);
	}

}
