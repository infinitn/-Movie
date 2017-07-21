import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {ForgetPage} from "../forget/forget";
import {UserService} from "../../app/user.service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {toPromise} from "rxjs/operator/toPromise";
import {ContactPage} from "../contact/contact";
import {SettingPage} from "../setting/setting";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:{} = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public users:UserService,
              public http:Http,
              public app:App
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  sign(){
    this.navCtrl.push(
      SignupPage,
    )
  }

  forget(){
  this.navCtrl.push(
    ForgetPage,
  )
  }


  denglu(){
    console.log(this.user);
    this.http.post('http://localhost:3000/login',this.user)
      .toPromise()
      .then((res)=>{
        if (res.json().success){
          //保存登录状态
          this.users.user = this.user;
          console.log(this.users.user);
          this.navCtrl.setRoot(ContactPage);
        }
      })
  }



}
