import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {Subscription} from 'rxjs/Subscription';
import {NewsFeed_I} from '../../models/newsfeed.interface';

@Component({selector: 'page-newsfeed', templateUrl: 'newsfeed.html'})
export class NewsfeedPage {

  NewsFeedSubscription : Subscription;
  NewsFeedRef$ : FirebaseObjectObservable < NewsFeed_I >;
  NewsFeed = {};

  constructor(public navCtrl : NavController, public navParams : NavParams,private database : AngularFireDatabase) {
    this.NewsFeedRef$ = this
    .database
    .object(`/db/newsfeed/`);

    this.NewsFeedSubscription = this
    .NewsFeedRef$
    .subscribe(newsfeed => {
      this.NewsFeed = newsfeed;
      console.log(newsfeed);
    });
  }

  showNewsFeed(newsfeed : NewsFeed_I): void{
    this.NewsFeedRef$.update(newsfeed);
  }

  changeSortBy(newsfeed : NewsFeed_I) : void {
    this.NewsFeedRef$.update(newsfeed);
  }

  changeSource(newsfeed : NewsFeed_I ): void {
    this.NewsFeedRef$.update(newsfeed);
  }

  changeInterval(newsfeed : NewsFeed_I) : void {
    this.NewsFeedRef$.update(newsfeed);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsfeedPage');
  }

}
