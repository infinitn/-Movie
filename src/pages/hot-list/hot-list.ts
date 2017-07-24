import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import {HomePage} from "../home/home";
import {MovieDetailPage} from "../movie-detail/movie-detail";

/**
 * Generated class for the HotListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-hot-list',
  templateUrl: 'hot-list.html',
})
export class HotListPage implements OnInit{

  hot=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotListPage');
  }
  ngOnInit(){
    this.http.get('http://localhost:3000/querydata/hot')
      .toPromise()
      .then(res=>{
          console.log(res);
          var result=res.json().data;
          console.log(result);
          this.hot=result;
          // console.log(this.hot);
      })

  }

  backbtn(){
    this.navCtrl.pop(HomePage);
  }
  hotmovie(hot){
    this.navCtrl.push(MovieDetailPage,{id:hot});
  }
}
