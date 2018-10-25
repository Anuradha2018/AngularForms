import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { Profile } from './../profile';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-profile-reactive',
  templateUrl: './profile-reactive.component.html',
  styleUrls: ['./profile-reactive.component.css']
})
export class ProfileReactiveComponent implements OnInit {
  profile: Profile;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl('')
    })
  });
constructor() {
    this.profile = new Profile();
   }
  ngOnInit() {
  }
  saveProfile() {
    this.profile = this.profileForm.value;
    console.log(this.profile.firstName);
    console.log(this.profileForm.get('lastName').value);
    console.log(this.profile.address.city);
  }
}
