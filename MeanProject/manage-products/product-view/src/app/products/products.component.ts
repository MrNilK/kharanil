import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./../products.service";
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [ProductsService]
})
export class ProductsComponent implements OnInit {
  prod : any;
  product1 : Product;
  name: String;
  email: String;
  contact: String;

  
  op = true; //default true
  index: number;
  _id: any;

  constructor(private prodsrvc : ProductsService ) { }

  ngOnInit(): void {
    this.prodsrvc.getProducts().subscribe((data)=>{
      console.log('product componenet -> ngOnInit -> product', data);
      this.prod = data;
    });
  }
  //add product
  addProduct(){
    const newProduct = {
      name : this.name,
      email : this.email,
      contact : this.contact,
    };
    this.prodsrvc.addProduct(newProduct).subscribe((data) =>{

      console.log("add product - > product ", data)

          // splice(index, deleteCount, product)
      this.prod.splice(0, 0, data)
       this.prod.splice(this.index, 1, data);
        this.name = '';
        this.email = '';
        this.contact = '';
    });
  }

  deleteProduct(dltProd){
  
    this.prodsrvc.deleteProduct(dltProd._id).subscribe((data) =>{
      console.log('data', data);
      console.log('_id : '+ dltProd._id);
      

      var index = this.prod.indexOf(dltProd);
      console.log('deleteProduct --> =', index);

      this.prod.splice(index, 1);
    });
  }

  editProduct(edtProd) {
    this.op = false;
    this.index = this.prod.indexOf(edtProd);
    this._id = edtProd._id;
    this.name = edtProd.name;
    this.email = edtProd.email;
    this.contact = edtProd.contact;
  }

   updateProduct() {
    this.op = true;
    console.log(' index : ', this.index);

    const newProduct = {
      name: this.name,
      email: this.email,
      contact: this.contact,
    };
    console.log('newProduct', newProduct);
    console.log('this._id ', this._id);

    this.prodsrvc.updateProduct(this._id, newProduct).subscribe((data) => {
        console.log(' putProduct -> product : ', data);
        this.prod.splice(this.index, 1, data);
        this.name = '';
        this.email = '';
        this.contact = '';
      });
  }



}
