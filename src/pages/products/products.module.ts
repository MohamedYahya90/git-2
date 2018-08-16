import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductsPage } from './products';
import { IonicImageViewerModule } from 'ionic-img-viewer';
@NgModule({
  declarations: [
    ProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductsPage),
    IonicImageViewerModule
  ],
})
export class ProductsPageModule {}
