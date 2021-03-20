import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CryptoService {

	constructor(private http: HttpClient) { }

	getCryptoDetails(){
		return this.http.get("http://api.coinlayer.com/list?&access_key=17655b5486b34a7aafa4133bef1dfc57");
	}

	getCryptoPrice(symbols : String[]){
		let cryptos : String = String(symbols);
		console.log(cryptos);
		return this.http.get("http://api.coinlayer.com/live?target=USD&symbols=" + cryptos + "&access_key=17655b5486b34a7aafa4133bef1dfc57");
	}

}
