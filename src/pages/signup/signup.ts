import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {UserService} from "../../app/user.service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {TabsPage} from "../tabs/tabs";
import {ContactPage} from "../contact/contact";

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user:{}={};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public users:UserService,
              public http:Http,
              public  app:App
  ) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  //注册
  zhuce()
  {
    console.log(this.user);
    this.http.post('http://localhost:3000/zhuce',this.user)
      .toPromise()
      .then((res)=> {
          console.log(res.json())
        if(res.json().success) {
          this.users.user = this.user;
          console.log(this.users.user);
          this.navCtrl.setRoot(ContactPage);
        }

      })
  }



}
