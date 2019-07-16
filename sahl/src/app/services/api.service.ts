import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  link="https://abdelrahman-lotfy.000webhostapp.com/public";

  constructor(private http: HttpClient) { }
  //Categories
  // Get All Categories to display it
  getCats() {
    return this.http.get(this.link+"/key/1234/cats");
  }

  // brands
  // Get latest 6 brands to display
  getBrands() {
    return this.http.get(this.link+"/key/1234/brands");
  }

  //offers
  // Get latest 4 offers to display
  getOffersLast() {
    return this.http.get(this.link+"/key/1234/lastOffers");
  }

  //items
  // Get latest 4 offers to display
  getItemsLast() {
    return this.http.get(this.link+"/key/1234/lastItems");
  }
}
