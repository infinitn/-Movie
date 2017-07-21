import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BianjiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-bianji',
  templateUrl: 'bianji.html',
})
export class BianjiPage {
  // items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  // openNavDetailsPage(item) {
  //   this.navCtrl.push(NavigationDetailsPage, { item: item });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BianjiPage');
  }




}
