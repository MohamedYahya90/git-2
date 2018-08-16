import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DomSanitizer} from '@angular/platform-browser'
import { DocumentViewer } from '@ionic-native/document-viewer';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  vid="https://www.youtube.com/embed/TdtVJuMPDhk?ecver=1"

  constructor(public navCtrl: NavController, public navParams: NavParams, private dom :DomSanitizer,private document: DocumentViewer) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPdf(){
  
    this.document.viewDocument("assets/imgs/pd.pdf", 'application/pdf', {});
  }

  san(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }
}
