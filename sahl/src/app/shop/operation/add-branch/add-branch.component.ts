import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
  addBranchForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.addBranchForm = new FormGroup({
      'branchName': new FormControl(null, Validators.required),
      'branchAddress': new FormControl(null, Validators.required),
      'branchPhone': new FormControl(null, Validators.required),
      'branchField': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.addBranchForm.value)
  }

}
