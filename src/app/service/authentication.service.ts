import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { DatabaseService } from '../service/database.service';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
 
 
const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
 
  constructor(private http: HttpClient, private databaseService: DatabaseService,) {
    this.loadToken();
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });    
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(user){
    this.databaseService.loginUser(user['id']); // Update logged_in tagging
    Storage.set({key: TOKEN_KEY, value: user['is_logged_in']});
    this.isAuthenticated.next(true);
  }
 
  logout(): Promise<void> {
    this.databaseService.checkCurrentUser().subscribe(async res => {
      if( res['values'].length > 0 ) {
        this.databaseService.logoutUser(res['values']['0']['id']); // Update logged_in tagging
        await Storage.set({key: INTRO_KEY, value: 'false'});
        this.isAuthenticated.next(false);
      } else {
        return false;
      }
    });
    return Storage.remove({key: TOKEN_KEY});
  }
}
