import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { AddItemPage } from '../../pages/add-item/add-item';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { EventItem } from '../../models/event-item-interface';
import { EditEventPage } from '../../pages/edit-event/edit-event';

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  eventListRef$: FirebaseListObservable<EventItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase,private actionSheetCtrl:ActionSheetController) {
    this.eventListRef$ = this.database.list('/db/events/');
   
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  navToAddItemPage(){
    this.navCtrl.push(AddItemPage);
  }

  selectEventItem(eventItem:EventItem){
    this.actionSheetCtrl.create({
      title:`${eventItem.name}`,
      buttons: [
        {
          text:'Edit',
          handler: ()=>{
            // 
            this.navCtrl.push(EditEventPage,{
              eventItemId:eventItem.$key})
          }
        },
        {
          text:'Delete',
          role:'destrctive',
          handler: ()=>{
              this.eventListRef$.remove(eventItem.$key);
          }
        },
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{
            console.log('user has select the cancel');
          }
        }
      ]
    }).present();

  }
}
