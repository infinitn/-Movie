import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {SettingPage} from "../setting/setting";
import {LoginPage} from "../login/login";
import {TaopiaopiaoPage} from "../taopiaopiao/taopiaopiao";
import {SignupPage} from "../signup/signup";
import {UserService} from "../../app/user.service";
import {BianjiPage} from "../bianji/bianji";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  show:boolean = true;
  pet:string = 'kittens';
  name=[];
  phone='';
  constructor(public navCtrl: NavController,public users:UserService) {
    if (this.users.user)
    {
      this.name.push(this.users.user);
      this.phone = this.name[0].phone;
    }

  }

  go(){
    this.navCtrl.push(
      SettingPage,
    )
  }
  goo(){
    this.navCtrl.push(
      LoginPage,
    )
  }


  goSign(){
    this.navCtrl.push(
      SignupPage,
    )
  }

  piaopiao(){
    this.navCtrl.push(
      TaopiaopiaoPage
    )
  }

  bianji(){
    this.navCtrl.push(
      BianjiPage
    )
  }



}



// @Component({
//   selector: 'page-contact',
//   template: `
//     <div><input type="text"><input type="text"></div>
//   `
// })
// export class BasicPage {
//
//   constructor() { }
//
// }






