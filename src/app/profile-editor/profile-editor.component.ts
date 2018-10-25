import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { Profile } from './../profile';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['' , Validators.required],
    lastName: [''],
    address: this.fb.group({
      city: [''],
      state: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  profileFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl('')
    })
  });
 constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
