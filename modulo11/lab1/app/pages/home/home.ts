import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navControl: NavController) {
  }

   changePageOne(){
  	this.navControl.push(ProductPage);
  }
   changePageTwo(){
  	this.navControl.push(ProfilePage);
  }
}
