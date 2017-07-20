import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieDetailPage} from "../movie-detail/movie-detail";
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  pet: string='kittens';
  icon:string='onShow';
  imgs=[];
  // title=[];
  constructor(public navCtrl: NavController,public http:Http) {

  }
  get(){
    this.http.get('http://localhost:3000/d/w').toPromise().then((res)=>{
      // console.log(res);
      console.log(res.json().data);
      this.imgs = res.json().data;

      console.log(this.imgs);
    })
  }
  detail(a){
    console.log(a);
    this.navCtrl.push(MovieDetailPage,{a})
  }

}
