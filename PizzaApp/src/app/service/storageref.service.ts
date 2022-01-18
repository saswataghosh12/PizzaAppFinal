function getLocalStorage(): Storage {
  return localStorage;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoragerefService {

  constructor() { }

  get localStorage(): Storage {
    return getLocalStorage();
  }
}
