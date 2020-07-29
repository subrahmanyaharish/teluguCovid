import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './models/country';
import { State } from './models/state';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Country>('https://api.covid19india.org/state_district_wise.json');
  }
}
