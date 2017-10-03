import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddItemPage } from '../../pages/add-item/add-item';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { EventItem } from '../../models/event-item-interface';
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  eventListRef$: FirebaseListObservable<EventItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.eventListRef$ = this.database.list('/db/events/');
   
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  navToAddItemPage(){
    this.navCtrl.push(AddItemPage);
  }
}
