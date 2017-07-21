import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SignupPage} from "../signup/signup";
import {UserService} from "../../app/user.service";
import {FankuiPage} from "../fankui/fankui";

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage implements OnInit{
  show:boolean = true;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public users:UserService
  ) {

  }

  ngOnInit(): void {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }


  go(){
    this.navCtrl.push(
      LoginPage,
    )
  }

  goSign(){
    this.navCtrl.push(
      SignupPage,
    )
  }

  fankui(){
    this.navCtrl.push(
      FankuiPage
    )
  }




}
