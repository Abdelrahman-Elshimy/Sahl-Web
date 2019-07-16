import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  addOfferForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.addOfferForm = new FormGroup({
      'offerName': new FormControl(null, Validators.required),
      'offerPrice': new FormControl(null, Validators.required),
      'offerNewPrice': new FormControl(null, [Validators.required]),
      'offerDesc': new FormControl(null, Validators.required),
      'offerImage': new FormControl(null)
    });

  }



  onSubmit() {
    console.log(this.addOfferForm.value)
  }
}
