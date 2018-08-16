import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  slideData = [{image: "./assets/imgs/n1.png" ,title:'Nestle'},{ image: "./assets/imgs/n3.jpg",title:'Cool' },{ image: "./assets/imgs/n2.jpg" ,title:'New'}]

  im = [{image:'n4.jpg',title:'Cookies'}, {image:'py.jpg',title:'Foster'}, {image:'nestle.jpg',title:'Finger'}];
  

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }
  
}
