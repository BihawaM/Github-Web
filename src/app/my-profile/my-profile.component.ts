import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service/my-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user: User[];

  constructor(public service: MyServiceService) { }

  getMyProfile(userTerm: string) {
    this.service.getOwner(userTerm).then(() => {
      this.user = this.service.user;
      // this.userLength = this.findUser.user.length;
    },
      (error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
    this.getMyProfile('BihawaM')
  }

}
