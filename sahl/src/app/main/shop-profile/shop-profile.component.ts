import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.component.html',
  styleUrls: ['./shop-profile.component.css']
})
export class ShopProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  shopId: number;
  ngOnInit() {
    this.shopId = this.route.snapshot.params['id'];
    console.log(this.shopId);
  }

}
