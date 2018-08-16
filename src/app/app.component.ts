import { Component, ViewChild } from '@angular/core';
import {Nav,  Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ImageLoaderConfig} from 'ionic-image-loader'

// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: string = 'HomePage'; 
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private imageLoaderConfig: ImageLoaderConfig) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'New Offers', component: 'SmarketPage' },
      { title: 'AddItem', component: 'AddItemPage' },
      { title: 'Products', component: 'ProductsPage' },
      { title: 'Complain', component: 'ComplainPage' },
      { title: 'Welcome', component: 'WelcomePage' },
      { title: 'About', component: 'AboutPage' }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
	  this.imageLoaderConfig.enableDebugMode();
      this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
      this.imageLoaderConfig.setFallbackUrl('assets/imgs/logo.png');
      this.imageLoaderConfig.setMaximumCacheAge(24 * 60 * 60 * 1000);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
     
  
    });
}
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
