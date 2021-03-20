import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CompaniesAndCryptosService {

	constructor(private http: HttpClient) { }

	getCompanies(symbol: String) {
		return this.http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=5min&outputsize=full&apikey=" + "8L3DCE3YY1HTUXHE");
	}

	getCryptos(symbol : String) {
		return this.http.get("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=" + symbol + "&market=USD&apikey=" + "8L3DCE3YY1HTUXHE");
	}
}
