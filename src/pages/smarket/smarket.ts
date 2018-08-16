import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';
import * as firebase from 'firebase'

@IonicPage()
@Component({
  selector: 'page-smarket',
  templateUrl: 'smarket.html',
})
export class SmarketPage {

  public employeeList:Array<any>;
  public loadedemployeeList:Array<any>;
  public employeeRef:firebase.database.Reference;


  // itemsRef: AngularFireList<any>;
  // employees: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFireDatabase){

    this.employeeRef = firebase.database().ref('/employees');
    
    this.employeeRef.on('value', employeeList => {
      let employees = [];
      employeeList.forEach( employee => {
        employees.push(employee.val());
        return false;
      });
      this.employeeList = employees;
      this.loadedemployeeList = employees;
    });




//  this.itemsRef = af.list('/employees');
//   Use snapshotChanges().map() to store the key
//   this.employees = this.itemsRef.snapshotChanges().pipe(
//     map(changes => 
//       changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
//     )
//   );
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmarketPage');
  
  }


  initializeItems(): void {
    this.employeeList = this.loadedemployeeList;
  }


  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
    this.employeeList = this.employeeList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
    console.log(q, this.employeeList.length);
  }



  // deleteItem(key: string) {    
  //   this.itemsRef.remove(key); 
  // }
}
