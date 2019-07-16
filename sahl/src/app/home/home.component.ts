import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cats = [];
  dataOfCats: any;
  brands = [];
  dataBrands: any;
  offers = [];
  dataOffers:any;
  items = [];
  dataItems:any;
  constructor(private api: ApiService) { }

  ngOnInit() {

    // get all categories
    this.getCats();
    // get latest 6 brands
    this.getBrands();
    // get last 4 offers
    this.getOffers();
    // get last 9 items
    this.getItems();
  }

  // get all categories
  getCats() {
    this.api.getCats().subscribe(
      (data) => {
        console.log(data);
        this.dataOfCats = data;
        console.log(this.dataOfCats.code);

        if (this.dataOfCats.code === 200) {
          console.log('good');
          this.cats = this.dataOfCats.data;
          console.log(this.cats[1]['catname']);
        }
        else {
          console.log(this.dataOfCats.message);
        }
      },
      (error) => {
        console.log(error);
      }
    )

  }

  // get latest 6 brands
  getBrands() {
    this.api.getBrands().subscribe(
      (data) => {
        this.dataBrands = data;
        if (this.dataBrands.code === 200) {
          this.brands = this.dataBrands.data;
          console.log(this.brands);
        }
        else {
          console.log(this.dataBrands.message);
        }

      },
      (error) => {
        console.log(error);
      }
    )
  }

  // get last 4 offers
  getOffers() {
    this.api.getOffersLast().subscribe(
      (data) => {
        this.dataOffers = data;
        if (this.dataOffers.code === 200) {
          this.offers = this.dataOffers.data;
          console.log(this.offers);
        }
        else {
          console.log(this.dataOffers.message);
        }

      },
      (error) => {
        console.log(error);
      }
    )
  }



    // get last 9 items
    getItems() {
      this.api.getItemsLast().subscribe(
        (data) => {
          this.dataItems = data;
          if (this.dataItems.code === 200) {
            this.items = this.dataItems.data;
            console.log(this.items);
          }
          else {
            console.log(this.dataItems.message);
          }
  
        },
        (error) => {
          console.log(error);
        }
      )
    }
}
