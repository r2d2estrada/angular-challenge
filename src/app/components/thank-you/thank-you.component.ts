import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  displayWelcomeUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.displayWelcomeUser = this.userService.getUser();
  }

}
