import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  itemId: number;
  itemImages = [1,2,3];
  x = 0;
  ngOnInit() {
    this.itemId = this.route.snapshot.params['id'];
    console.log(this.itemId);

    $('.img-item:nth-child(1)').addClass('active');
    setInterval(()=>{

      if($('.img-item:nth-child('+ this.itemImages.length +')').hasClass('active')) {
        $('.img-item:nth-child(1)').addClass('active').siblings().removeClass('active');
      }
      else {
        $('.img-item.active').next().addClass('active').siblings().removeClass('active');
      }

      

    }, 3000);
   
    
  }

}
