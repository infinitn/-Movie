import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  id:number;
  imgs=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.id = navParams.get('id');
  }
  get(){
    this.http.get('http://localhost:3000/w').toPromise().then((res)=>{
      // console.log(res);
      console.log(res.json().data);
      this.imgs = res.json().data;
      // this.title=res.json().data;
      console.log(this.imgs);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
  }


}
