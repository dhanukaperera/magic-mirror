import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EventItem } from '../../models/event-item-interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  eventItem = {} as EventItem;
  eventItemRef$ : FirebaseListObservable<EventItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase) {
    this.eventItemRef$ = this.database.list('/db/events/');
    this.eventItem.date = this.getCurrentDate();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  getCurrentDate():string{
    let today = Date();

    let y = today.split(' ')[3];
    let m = today.split(' ')[1];
    let d = today.split(' ')[2];

    switch(m){
      case 'Jan':
      m = '01';
      break;
    case 'Feb':
      m = '02';
      break;
    case 'Mar':
      m = '03';
      break;
    case 'Apr':
      m = '04';
      break;
    case 'May':
      m = '05';
      break;
    case 'Jun':
      m = '06';
      break;
    case 'Jul':
      m = '07';
      break;
    case 'Aug':
      m = '08';
      break;
    case 'Sep':
      m = '09';
      break;
    case 'Oct':
      m = '10';
      break;
    case 'Nov':
      m = '11';
      break;
    case 'Dec':
      m = '12';
      break;
    }

    return y+'-'+m+'-'+d;
  }

  addEventItem(eventItem: EventItem){
    console.log(eventItem);
    this.eventItemRef$.push(eventItem);
    this.eventItem = {} as EventItem;
    this.navCtrl.pop();
  }
}
