import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  offerId: number;
  offerImages = [1,2,3];
  ngOnInit() {
    this.offerId = this.route.snapshot.params['id'];
    console.log(this.offerId);

    $('.img-offer:nth-child(1)').addClass('active');
    setInterval(()=>{

      if($('.img-offer:nth-child('+ this.offerImages.length +')').hasClass('active')) {
        $('.img-offer:nth-child(1)').addClass('active').siblings().removeClass('active');
      }
      else {
        $('.img-offer.active').next().addClass('active').siblings().removeClass('active');
      }

      

    }, 3000);
  }

}
