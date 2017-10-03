import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { EventItem } from '../../models/event-item-interface';
@Component({
  selector: 'page-edit-event',
  templateUrl: 'edit-event.html',
})
export class EditEventPage {


  eventItemRef$: FirebaseObjectObservable<EventItem>;

  
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {
    const eventItemId = this.navParams.get('eventItemId');
    console.log(eventItemId);
    this.eventItemRef$ = this.database.object(`/db/events/${eventItemId}`)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEventPage');
  }

}
