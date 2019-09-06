import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  userObj = new User();

  constructor(private userService: UserService, private router: Router) { 
    this.userObj.firstName = '';
    this.userObj.lastName = '';
    this.userObj.email = '';
    this.userObj.phone = '';
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl(this.userObj.firstName, Validators.required),
      lastName: new FormControl(this.userObj.lastName, Validators.required),
      additionalInfo: new FormGroup({
        email: new FormControl(this.userObj.email, Validators.email),
        phone: new FormControl(this.userObj.phone)
      }, this.validateAditionalInfo())
    });
  }

  validateAditionalInfo(): ValidatorFn {
    return function validate(group: FormGroup) {
      let filled = 0;

      Object.keys(group.controls).forEach(key => {
        const control = group.controls[key];
        if (control.value.length > 0) {
          filled ++;
        }
      });

      if (filled <= 0) {
        return { additionalInfoErrors: true }
      }

      return null;
    };
  }

  submitForm() {
    this.userService.registerUser(this.userObj);
    this.router.navigate(['welcome']);
  }
}
