import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplimentsPage } from './compliments';

@NgModule({
  declarations: [
    ComplimentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplimentsPage),
  ],
})
export class ComplimentsPageModule {}
