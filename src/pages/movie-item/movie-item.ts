import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {MovieListPage} from "../movie-list/movie-list";

/**
 * Generated class for the MovieItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

// const BAST_URL='http://localhost:3000/query/';

@Component({
  selector: 'page-movie-item',
  templateUrl: 'movie-item.html',
})
export class MovieItemPage implements OnInit{

  types=[];
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http:Http
  ) {
  }

 ngOnInit():void {
   this.http.get('http://localhost:3000/querydata/c')
     .toPromise()
     .then(res=>{
       console.log(res.json());
       this.types=res.json().data;
       console.log(this.types);
     })

 }
getTypeID(type){
    // console.log(type);
  this.navCtrl.push(MovieListPage,{type:type});

}


}
