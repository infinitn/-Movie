import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {SettingPage} from "../setting/setting";
import {LoginPage} from "../login/login";
import {TaopiaopiaoPage} from "../taopiaopiao/taopiaopiao";
import {SignupPage} from "../signup/signup";
import {UserService} from "../../app/user.service";
import {BianjiPage} from "../bianji/bianji";
import {MytopicPage} from "../mytopic/mytopic";
import {MymessagePage} from "../mymessage/mymessage";
import {MyarticlePage} from "../myarticle/myarticle";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  show:boolean = true;
  pet:string = 'kittens';
  name=[];
  phone='';

  uname;
  upass;

  constructor(public navCtrl: NavController,public users:UserService) {
    // console.log(localStorage.getItem('ph'));
    this.uname =  localStorage.getItem('counter');
    this.upass = localStorage.getItem('pass');


    // if(!this.uname){
    //   this.users.user = this.uname;
    // }

    // if (this.users.user) {
    //   this.name.push(this.users.user);
    //   this.phone = this.name[0].phone;
    // }
    // console.log(this.uname)

  }


  go(){
    this.navCtrl.push(
      SettingPage
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

  myTopic(){
    this.navCtrl.push(
      MytopicPage
    )
  }

  myMessage(){
    this.navCtrl.push(
      MymessagePage
    )
  }

  myArticle(){
    this.navCtrl.push(
      MyarticlePage
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






