import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatetimePage } from '../../pages/datetime/datetime';
import { WeatherPage } from '../../pages/weather/weather';
import { TodoPage } from '../../pages/todo/todo';
import { ComplimentsPage } from '../../pages/compliments/compliments';
import { NewsfeedPage } from '../../pages/newsfeed/newsfeed';

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

  navToNewsFeedPage(){
    this.navCtrl.push(NewsfeedPage);
  }

  navToWeatherPage(){
    this.navCtrl.push(WeatherPage);
  }

  navToComplimentsPage(){
    this.navCtrl.push(ComplimentsPage);
  }

  navToTodoPage(){
    this.navCtrl.push(TodoPage);
  }

}
