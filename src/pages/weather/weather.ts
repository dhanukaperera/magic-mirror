import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {Subscription} from 'rxjs/Subscription';
import {Weather_I} from '../../models/weather.interface';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  WeatherSubscription : Subscription;
  WeatherRef$ : FirebaseObjectObservable < Weather_I >;
  Weather = {};

  private type : string;
  private temperature_C : any; 
  private temperature_F : any;

  private display_C: boolean;
  private display_F: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,private database : AngularFireDatabase) {
    this.display_C =false;
    this.display_F = true;
    this.WeatherRef$ = this
    .database
    .object(`/db/weather/`);

    this.WeatherSubscription = this
    .WeatherRef$
    .subscribe(weather => {
      this.Weather = weather;
      this.type = weather.type;
      console.log(weather);
      this.temperature_F = (weather.temperature);
      this.temperature_C = (parseInt(weather.temperature)-32)*5/9;
      this.temperature_C = this.temperature_C.toFixed(0);

      if(weather.type == 'C') {
        this.display_C =true;
        this.display_F = false;
      } else if  (weather.type == 'F') {
        this.display_C =false;
        this.display_F = true;
      }
    });
  }

  changeUnit(weather : Weather_I) : void {
    this
    .WeatherRef$
    .update(weather);
  }

  displayWeather(weather : Weather_I): void {
    this
    .WeatherRef$
    .update(weather);
  }
  ionViewWillLeave() {
    this
      .WeatherSubscription
      .unsubscribe();
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

}
