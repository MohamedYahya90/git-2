import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmarketPage } from './smarket';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import {IonicImageLoader} from 'ionic-image-loader'

@NgModule({
  declarations: [
    SmarketPage,
  ],
  imports: [
    IonicPageModule.forChild(SmarketPage),
    IonicImageViewerModule,IonicImageLoader
  ],
})
export class SmarketPageModule {}
