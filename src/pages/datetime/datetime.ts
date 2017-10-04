import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {Subscription} from 'rxjs/Subscription';
import {Clock_I} from '../../models/clock.interface';
import {Date_I} from '../../models/date.interface';

@Component({selector: 'page-datetime', templateUrl: 'datetime.html'})
export class DatetimePage {

  ClockSubscription : Subscription;
  ClockRef$ : FirebaseObjectObservable < Clock_I >;
  Clock = {};

  DateSubscription : Subscription;
  DateRef$ : FirebaseObjectObservable < Date_I >;
  Date = {};

  constructor(public navCtrl : NavController, public navParams : NavParams, private database : AngularFireDatabase) {
    this.ClockRef$ = this
      .database
      .object(`/db/clock/`);
    this.ClockSubscription = this
      .ClockRef$
      .subscribe(clock => {
        this.Clock = clock;
        console.log(clock);
      });

    this.DateRef$ = this
      .database
      .object(`/db/date/`);
    this.DateSubscription = this
      .DateRef$
      .subscribe(date => {
        this.Date = date;
        console.log(date);
      });
  }

  displayClock(clock : Clock_I) : void {
    this
      .ClockRef$
      .update(clock);
  }

  changeTimeFormat(clock : Clock_I) : void {
    this
      .ClockRef$
      .update(clock);
  }

  displaySeconds(clock : Clock_I) : void {
    this
      .ClockRef$
      .update(clock);
  }

  showDate(date : Date_I) : void {
    this
      .DateRef$
      .update(date);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatetimePage');
  }

  ionViewWillLeave() {
    this
      .ClockSubscription
      .unsubscribe();
    this
      .DateSubscription
      .unsubscribe();
  }

}
