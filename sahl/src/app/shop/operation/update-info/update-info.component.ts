import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
  updateInfoForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.updateInfoForm = new FormGroup({
      'shopName': new FormControl(null, Validators.required),
      'shopAddress': new FormControl(null, Validators.required),
      'shopPhone': new FormControl(null, Validators.required),
      'shopCat': new FormControl(null, [Validators.required]),
      'shopDesc': new FormControl(null, Validators.required),
      'shopImage': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.updateInfoForm.value)
  }

}
