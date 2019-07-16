import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  totalPrice =1000;
  price;
  discount;
  constructor() { }

  ngOnInit() {
    this.addProductForm = new FormGroup({
      'itemName': new FormControl(null, Validators.required),
      'itemPrice': new FormControl(null, Validators.required),
      'itemCount': new FormControl(null, Validators.required),
      'itemTotal': new FormControl({
        value: this.totalPrice, disabled: true}),
      'itemDiscount': new FormControl(null, [Validators.required]),
      'itemDesc': new FormControl(null, Validators.required),
      'itemImage': new FormControl(null, Validators.required)
    });
    this.totalPrice = this.price -  (this.discount/100) * this.price;

  }



  onSubmit() {
    console.log(this.totalPrice);
    console.log(this.addProductForm.value)
  }
}
