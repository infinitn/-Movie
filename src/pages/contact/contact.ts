import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {SettingPage} from "../setting/setting";
import {LoginPage} from "../login/login";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  go(){
    this.navCtrl.push(
      SettingPage,
    )
  }

  login(){
    this.navCtrl.push(
      LoginPage,
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






