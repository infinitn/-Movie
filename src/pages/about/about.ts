import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieDetailPage} from "../movie-detail/movie-detail";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  pet: string='puppies';
  puppies:string='onShow';
  constructor(public navCtrl: NavController) {

  }

  detail(id){
    this.navCtrl.push(MovieDetailPage,{id})
  }

}
