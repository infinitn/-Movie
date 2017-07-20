import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SignupPage} from "../signup/signup";

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
export class SettingPage {
  show:boolean = true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  items = [
    '推荐给好友',
    '意见反馈',
    '给我们评分',
    '版本检测',
    '关于毒舌电影'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
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





}
