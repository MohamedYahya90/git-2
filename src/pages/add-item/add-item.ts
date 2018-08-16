import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase' ;
import { Camera, CameraOptions } from '@ionic-native/camera';
import { environment} from '../../environments/environment'







@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  employess: AngularFireList<any>;

selectedPhoto;
loading;
currentImage;
imageName;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  public af : AngularFireDatabase,
public loadingCtrl:LoadingController,
public camera : Camera,
 ) {
 this.employess = af.list('/employees');
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  createEmployee(name,lname,age,dept){
    this.imageName = name;
this.upload()
    this.employess.push({

      name : name,
      lname :lname,
      age: age,
      dept:dept,
      image :this.imageName

    }).then(newEmployee => {
      this.navCtrl.push('SmarketPage');
    })


}




upload(){
  if(this.selectedPhoto){
    var uploadTask =  firebase.storage().ref().child('images/'+this.imageName+'.jpg').put(this.selectedPhoto);
    uploadTask.then(this.onError);
  }
}

onError = (error) => {
  console.log(error);
  this.loading.dismiss();
}







takePhoto(){

const options : CameraOptions = {

  quality:100,
  targetHeight:200,
  targetWidth:200,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType:this.camera.MediaType.PICTURE,
  correctOrientation:true
}

this.camera.getPicture(options).then((ImageData)=>{
  this.loading = this.loadingCtrl.create({
    content: 'Taking photo :) '
  });

  this.loading.present();
  this.selectedPhoto = this.dataURLtoBlob('data:image/jpeg;base64,'+ImageData);
  this.loading.dismiss();
  this.currentImage = 'data:image/jpeg;base64,'+ImageData;

},(err)=>{
  console.log(err);
}) ;

}

selectPhoto(){

  const options : CameraOptions = {
  
    quality:100,
    targetHeight:200,
    targetWidth:200,
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType:this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((ImageData)=>{
    this.loading = this.loadingCtrl.create({
      content: ' Access Gallery '
    });
  
    this.loading.present();
    this.selectedPhoto = this.dataURLtoBlob('data:image/jpeg;base64,'+ImageData);
    this.loading.dismiss();
    this.currentImage = 'data:image/jpeg;base64,'+ImageData;
  
  },(err)=>{
    console.log(err);
  }) ;
  
  }

dataURLtoBlob(dataURL){
let binary = atob(dataURL.split(',')[1]);
let array = [];
for (let index = 0; index < binary.length; index++) {
  array.push(binary.charCodeAt(index));

}
return new Blob([new Uint8Array(array)],{type:'image/jpeg'});
}


}
