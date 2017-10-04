import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {Subscription} from 'rxjs/Subscription';
import { Compliments_I } from '../../models/compliments.interface';

@Component({selector: 'page-compliments', templateUrl: 'compliments.html'})
export class ComplimentsPage {

  ComplimentsSubscription : Subscription;
  ComplimentsRef$ : FirebaseObjectObservable < Compliments_I >;
  Compliments = {};

  constructor(public navCtrl : NavController, public navParams : NavParams ,private database : AngularFireDatabase) {
    this.ComplimentsRef$ = this
    .database
    .object(`/db/compliments/`);
    
    this.ComplimentsSubscription = this
    .ComplimentsRef$
    .subscribe(compliments => {
      this.Compliments = compliments;
      console.log(compliments);
    });
  }

  displayCompliments(compliments : Compliments_I) : void{
    this
    .ComplimentsRef$
    .update(compliments);
  }

  changeDisplayInfo(compliments : Compliments_I ) : void {
    this.ComplimentsRef$.update(compliments);
  }

  ionViewWillLeave() {
    this
      .ComplimentsSubscription
      .unsubscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplimentsPage');
  }

}
