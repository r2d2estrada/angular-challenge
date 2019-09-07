import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  displayWelcomeUser: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.displayWelcomeUser = this.userService.getUser();
    document.getElementById('input1').focus();
  }

  focusNext(currentElem, nextElem) {
    const val = <HTMLInputElement>document.getElementById(currentElem).value;
    if (this.validateNumber(val)) {
      document.getElementById(nextElem).focus();
    }
  }

  submit(currentElem) {
    this.router.navigate(['thank-you']);
  }

  validateNumber(input) {
    const regexp = /[0-9]/g;
    return regexp.test(input);
  }

}
