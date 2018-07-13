import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import TweetService from './tweet.service';
// import { AppModule } from './app.module';
import {AppInjector} from './app.injector';
@Component({
  selector: 'ngx-tweet',
  templateUrl: './app.component.html',
  styleUrls: [
    "./bootstrap.min.css",
  ],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit{
  searchText: string;
  order: string;
  list: string[];
  private tweetService;
  constructor(
  ){
    this.tweetService = AppInjector.get(TweetService);
    
  }

  ngOnInit() {
    this.order = "asc";
    this.list = [];
    this.searchText = "";
    this.getTweets();
  }

  getTweets() {
    console.log("tweets");
    this.list = this.tweetService.getTweets(this.searchText, this.order);
  }
  
  // onSubmit(evt:any) {
  //   console.log("submit", evt);
  //   this.getTweets();
  //   return false;
  // }

  onKey(evt:any, value:string) {
    console.log("key");
    this.searchText = value;
    if(evt.keyCode === 13) {
      this.getTweets();
    }
  }
  
  changeOrder(dir:string) {
    console.log("order");
    this.order = dir;
    this.getTweets();
  }
}
