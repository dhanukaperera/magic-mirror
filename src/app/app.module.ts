import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatetimePage } from '../pages/datetime/datetime'
import { WeatherPage } from '../pages/weather/weather';
import { TodoPage } from '../pages/todo/todo';
import { AddItemPage } from '../pages/add-item/add-item';
import { ComplimentsPage } from '../pages/compliments/compliments';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatetimePage,
    ComplimentsPage,
    TodoPage,
    AddItemPage,
    NewsfeedPage,
    WeatherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DatetimePage,
    ComplimentsPage,
    TodoPage,
    AddItemPage,
    NewsfeedPage,
    WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
