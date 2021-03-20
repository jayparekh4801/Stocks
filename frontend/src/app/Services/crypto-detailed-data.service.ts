import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CryptoDetailedDataService {

	constructor(private http: HttpClient) { }

	getCryptoDetailedData(symbol: any) {

		return this.http.post("http://localhost:8000/getCryptoData", {symbol : symbol});
	}

	saveCryptoData(cryptoData: any) {
		return this.http.post("http://localhost:8000/saveCryptoData", cryptoData);
	}
}
