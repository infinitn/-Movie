import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import {MovieItemPage} from "../movie-item/movie-item";
import {MovieDetailPage} from "../movie-detail/movie-detail";

/**
 * Generated class for the MovieListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
})
export class MovieListPage implements OnInit{

  id:number;
  M_id=[];
  List=[];
  cover:any;
  coll=[];
  list_type:any;
  show:boolean=false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http:Http
  ) {
      var datas=navParams.get('type');
      this.list_type=datas.type;
      this.id=datas.id;
      // console.log(this.list_type);
  }

  ngOnInit(){


    this.http.get('http://localhost:3000/querydata/cm')
      .toPromise()
      .then(res=>{
        var result=res.json().data;
        for (var i in result){
          if(this.id==result[i].c_id){
            // console.log(result[i].m_id);
            this.M_id.push(result[i].m_id);

            // console.log(this.M_id);
          }
        }
      })

    this.http.get('http://localhost:3000/querydata/m')
      .toPromise()
      .then(results=>{
        var resu=results.json().data;
        for (var m in this.M_id){
          for (var j in resu){
            // resu[j]=this.show;
            // console.log(resu[j]);
            if (this.M_id[m]==resu[j].id){

                this.List.push(resu[j]);
            }
          }
        }
        console.log(this.List);
        this.cover=this.List[0].cover;
      })


  }

  backbtn(){
    this.navCtrl.pop(MovieItemPage);
  }
  movieDir(det){
    this.navCtrl.push(MovieDetailPage,{id:det});
  }
  collect(list){
    // console.log(this.coll);
    // this.coll.push(list);
    if (this.coll.length==0){
      this.coll.push(list);
    }else {
      for (var i in this.coll){
        if (this.coll[i].id==list.id){
          this.coll.pop();
        }else {
          this.coll.push(list);
        }
      }
    }
    console.log(this.coll);
    this.show=!this.show;
  }

}
