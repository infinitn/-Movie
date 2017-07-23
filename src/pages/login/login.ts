import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {ForgetPage} from "../forget/forget";
import {UserService} from "../../app/user.service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {ContactPage} from "../contact/contact";
// import {SettingPage} from "../setting/setting";

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
  // use:any;
  // us:string;
  // ph:string[];

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
          this.users.user = this.user;
          // this.use.push(this.user);
          // this.us = JSON.stringify(this.user);
          // console.log(JSON.stringify(this.use));
          //保存登录状态
          // localStorage.setItem('ph',this.us);
          // console.log(localStorage.getItem('ph'));

          // console.log(this.users.user);

          localStorage.setItem('counter',this.users.user['phone']);
          localStorage.setItem('pass',this.users.user['password']);
          console.log(localStorage.getItem('counter'));
          // alert('登陆成功');
          this.navCtrl.setRoot(ContactPage);
        }
      })
  }



}
