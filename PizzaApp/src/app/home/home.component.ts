import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza  } from '../models/Pizza.model';

import { CartService } from '../service/cart.service';
import { HomeService } from '../service/home.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  products: Pizza[]=[
    {
      id:1,
      name:'Veg Pizza',
      description:'huwefjekf vnfdjg',
      price:450,
      photoPath:'assets/images/pizza1.png'
    },
    {
      id:2,
      name:'Non Pizza',
      description:'huwefjekf vnfdjg',
      price:50,
      photoPath:'assets/images/pizza4.png'
    },
    {
      id:3,
      name:'Non Pizza',
      description:'huwefjekf vnfdjg',
      price:50,
      photoPath:'assets/images/pizza4.png'
    }
  ];
 
  constructor( private route: ActivatedRoute,
    private cartService: CartService,public homeService : HomeService ,private router: Router,private storageService : StorageService ) {
  }
  
  addToCart(product: Pizza) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  
  }
   
  
  addNew(){
     
    this.products.push( {
      'id':3,
      'name':'pizza',
      'description':'sfnksd',
      'photoPath':'assets/images/pizza5.png'  
    },{
      'id':4,
      'name':'pizza',
      'description':'sfnksd',
      'photoPath':'assets/images/pizza2.png'  
    }
    );
    
  }
  
    
  ngOnInit(): void 
  {
      this.homeService.GetPizzaList();
      
      
  }

  cartClicked()
  {
    this.router.navigate(['cart']);
  }

  logoutClicked()
  {
    this.storageService.clearAllData();
    this.router.navigate(['']);
  }

}


