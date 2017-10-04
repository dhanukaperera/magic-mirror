import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Clock_I } from '../../models/clock.interface';


@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html',
})
export class DatetimePage {

  ClockSubscription: Subscription;
  
    ClockRef$: FirebaseObjectObservable<Clock_I>;
  
    Clock = {};
    timeFormat: boolean;
 // timeFormat: string = "f";
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {
    this.ClockRef$ = this.database.object(`/db/clock/`);
    this.ClockSubscription=this.ClockRef$.subscribe(clock =>{ 
     this.Clock = clock;
     console.log(clock);
     //this.timeFormat = clock.display;
     } );
  }


  displayClock(clock:Clock_I){
    console.log(clock);
    this.ClockRef$.update(clock);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatetimePage');
  }

}
