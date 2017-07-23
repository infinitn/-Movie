import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  idd;
  imgs=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.idd = navParams.data.move;
    console.log(this.idd);
    this.http.get('http://localhost:3000/iddd',{params:{id:this.idd}}).toPromise().then((res)=>{
      // console.log(res);
      console.log(res.json().data);
      this.imgs = res.json().data;
      // this.title=res.json().data;
      console.log(this.imgs);
    });
  }
}
