import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  addEventItem(eventItem: EventItem){
    console.log(eventItem);
    this.eventItemRef$.push(eventItem);
    this.eventItem = {} as EventItem;
    this.navCtrl.pop();
  }
}
