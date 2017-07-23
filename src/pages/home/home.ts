import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {MovieItemPage} from "../movie-item/movie-item";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pet: string='kittens'
  constructor(public navCtrl: NavController) {

  }

  item(){
    this.navCtrl.push(
      MovieItemPage
    )
  }

}
