import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatetimePage } from '../../pages/datetime/datetime'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navToDateTimePage(){
   this.navCtrl.push(DatetimePage);
  }
}
