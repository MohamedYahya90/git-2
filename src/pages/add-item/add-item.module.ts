import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemPage } from './add-item';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    AddItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemPage),
  ],

  providers: [
    Camera
  ],
})
export class AddItemPageModule {}
