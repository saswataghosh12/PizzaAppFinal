import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup , FormControl , Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/LoginResponse.model';
import { HomeService } from '../service/home.service';
import { StorageService } from '../service/storage.service';
import { LoginRequest } from '../models/LoginRequest.model';
import { User } from '../models/User.model';
import { ResponseModel } from '../models/ResponseModel.model';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  title ='Pizza Pizza!!'

  avail: boolean = false;
  // var checkArray;
  // var checkArray;
  arr: any[] = [];
  email: string = '';
  password: string = '';
  firstname : string ='';
  lastname : string ='';

  constructor(private router: Router ,private storageService : StorageService ,private homeService : HomeService) { }
  

  ngOnInit(): void {
   
  }

  onClickSubmit( ) {
  
    if(this.Validate())
    {
      var request = new User();
      request.email = this.email;
      request.password = this.password;
      request.address = "";
      request.firstName =  this.firstname;
      request.lastName = this.lastname;
   
      this.homeService.TrySignUp(JSON.stringify(request)).subscribe(
        res => 
        {
          var response= res as ResponseModel;
          if(response.isSuccess)
          {
            this.router.navigate(['/login']);      
          }
          else
          {
            
            alert(response.messsage);
          } 
        },
        err => { alert("Something went wrong"); }
      );
    }
 }

 Validate() : boolean
  {
    let rslt:boolean = false;
    if(this.email == null || this.password == null || this.email == '' || this.password =='' || this.firstname==null  || this.firstname =='' || this.lastname==null  || this.lastname =='' )
    {
      rslt = false;
      alert("Enter all details");
    }
    else
      rslt = true;
    return rslt;
  }




}


