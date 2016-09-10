import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductServices } from '../../providers/product/product';

/*
  Generated class for the ProductPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/product/product.html',
  providers: [ProductServices]
})
export class ProductPage {

	public list: any;

    constructor(private navCtrl: NavController, productServices: ProductServices){
  	productServices.getProducts().subscribe(
  		list => { this.list = list},
  		err => {
  			alert(err);
  		})
	}

}
