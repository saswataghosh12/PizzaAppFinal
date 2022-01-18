
import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { StoragerefService } from './storageref.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _localStorage: Storage;

   constructor(private _localStorageRefService: StoragerefService) {
      this._localStorage = _localStorageRefService.localStorage
   }

   public SaveUserData(data: User|null) {
    const jsonData = JSON.stringify(data)
    this._localStorage.setItem('UserData', jsonData)
    //this._myData$.next(data)
 }
 public isUserLoggedIn() : boolean
 {
    let rslt:boolean = false;
    var data = this.getData("UserData");
    if(data == null || data == "")
      rslt = false;
    else
      rslt = true;
    return rslt
 }

 setData(data: any , key : string) {
  const jsonData = JSON.stringify(data)
  localStorage.setItem(key, jsonData)
}

getData( key : string) : string | null {
  return localStorage.getItem(key)
}

removeData(key : string) {
  localStorage.removeItem(key)
}

clearAllData()
{
  localStorage.clear();
}

  getObjectData(key : string)  {
    var data = JSON.parse(localStorage.getItem(key) ?? "") ?? null;
    return data
  }
}