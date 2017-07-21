import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string='kittens'
  imgs= [];
  constructor(public navCtrl: NavController,public http:Http) {

  }

  get(){
    this.http.get('http://localhost:3000/w').toPromise().then((res)=>{
      // console.log(res);
      console.log(res.json().data);
      this.imgs = res.json().data;
      console.log(this.imgs);
    })
  }

}
