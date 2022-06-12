import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../service/authentication.service';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public user: [];
  public username: string;
  public firstname: string;
  public lastname: string;

  constructor(
    public navCtrl: NavController,
    public toastController: ToastController,
    private databaseService: DatabaseService,
    private authService: AuthenticationService, 
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.getUser();
  }

  showToast() {
    this.toastController.create({
      message: 'Profile updated successfully!',
      position: 'bottom',
      duration: 3000,
      buttons: [
       {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            // console.log('Close clicked');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }

  getCurrentUser(){

  }

  goToResetPassword(){
    this.navCtrl.navigateForward('reset-password');
  }

  onSubmit( form ){
    this.databaseService.updateUser(this.user['id'], form.value);
    this.showToast();
    this.getUser();
  }

  getUser(){
    this.databaseService.checkCurrentUser().subscribe(res => {
      if( res['values'].length > 0 ) {
        this.user = res['values']['0'];
        this.username = this.user['username'];
        this.firstname = this.user['firstname'];
        this.lastname = this.user['lastname'];
      }
    });
  }

  async logout() {
    this.authService.logout();
  }
}
