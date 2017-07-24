import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {MovieItemPage} from "../movie-item/movie-item";
import {HotListPage} from "../hot-list/hot-list";

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

  gethot(){
    this.navCtrl.push(HotListPage)
  }
}
