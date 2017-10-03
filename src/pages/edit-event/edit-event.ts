import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { EventItem } from '../../models/event-item-interface';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'page-edit-event',
  templateUrl: 'edit-event.html',
})
export class EditEventPage {

  eventItemSubscription: Subscription;

  eventItemRef$: FirebaseObjectObservable<EventItem>;

  eventItem = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase) {
    
    const eventItemId = this.navParams.get('eventItemId');
    console.log(eventItemId);
    this.eventItemRef$ = this.database.object(`/db/events/${eventItemId}`);
     this.eventItemSubscription=this.eventItemRef$.subscribe(eventItem =>{ 
      this.eventItem = eventItem;
      console.log(eventItem);
      }
    );
  }


  editShippingItem(eventItem:EventItem){
    this.eventItemRef$.update(eventItem);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEventPage');
  }
  ionViewWillLeave(){
    this.eventItemSubscription.unsubscribe();
  }

}
