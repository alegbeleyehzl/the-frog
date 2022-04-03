import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  user = [];

  constructor( 
    public navCtrl: NavController,
    public toastController: ToastController,
    private databaseService: DatabaseService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  onSubmit( form ){
    this.databaseService.checkCurrentUser().subscribe(res => {
      if( res['values'].length > 0 ) {
        this.user = res['values']['0'];

        switch( true ){
          case this.user['password'] !== form.value['currentPassword']:
            this.showAlert('Invalid input','The current password you entered is incorrect.');
            break;
          case this.user['password'] == form.value['newPassword']:
            this.showAlert('Invalid input','New password cannot be the same as your old password. Please try again!');
            break;
          case form.value['newPassword'] !== form.value['confirmPassword']:
            this.showAlert('Invalid input','New password and confirm password do not match. Please try again!');
            break;
          default:
            this.databaseService.updatePassword(this.user['id'], { password: form.value['newPassword'] });
            this.showAlert('Success','Password successfuly changed!');
            this.returnToProfile();
            break;
        }
      }
    });
  }

  showAlert( header, msg ) {
    this.alertController.create({
      header    : header,
      message   : msg,
      buttons: [
        {
          text: 'OK',
          handler: (data: any) => {
            // this.navCtrl.navigateForward('internal-dissection');
          }
        }
      ]
    }).then(res => {
      res.present();
    });

  }

  returnToProfile(){
    this.navCtrl.navigateBack('profile');
  }

  showToast() {
    this.toastController.create({
      message: 'Password changed!',
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

}
