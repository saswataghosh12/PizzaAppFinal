import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../service/storage.service';
import { HomeService } from '../service/home.service';
import { LoginRequest } from '../models/LoginRequest.model';
import { LoginResponse } from '../models/LoginResponse.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private router: Router,private homeService : HomeService,private storageService : StorageService) { }

  ngOnInit(): void {
    if(this.storageService.isUserLoggedIn())
    {
      this.router.navigate(['/home']);
    }
  }

  loginClicked()
  {
      if(this.Validate())
      {
        var request = new LoginRequest();
        request.Email = this.email;
        request.Password = this.password;
        this.homeService.TryLogin(JSON.stringify(request)).subscribe(
          res => 
          {
            var response= res as LoginResponse;
            if(response.isSuccess)
            {
              this.storageService.SaveUserData(response.user ?? null);
              this.router.navigate(['/home']);      
            }
            else
            {
              alert("Please check credential");
            } 
          },
          err => { alert("Please check credential"); }
        );
      }
  }
  
  signUpClicked()
  {
    this.router.navigate(['/subscribe']);
  }
  Validate() : boolean
  {
    let rslt:boolean = false;
    if(this.email == null || this.password == null || this.email == '' || this.password =='')
    {
      rslt = false;
      alert("Enter all details");
    }
    else
      rslt = true;
    return rslt;
  }
}

