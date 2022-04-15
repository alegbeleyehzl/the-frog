import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  user = [];

  constructor(
    public navCtrl: NavController,
    public toastController: ToastController,
    private alertController: AlertController,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit() {
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

  onSubmit( form ){
    this.databaseService.checkUsername(form.value).subscribe(res => {
      if( res['values'].length <= 0 ) {
        this.showAlert('Invalid input','Username does not exist. Please try again!');
      } else {
        if( this.checkPasswords( form ) ) {
          this.databaseService.updatePassword(res['values']['0']['id'], { password: form.value['password'] });
          this.showAlert('Success','Password successfuly changed!');
          this.goToLogin();
        } else {
          this.showAlert('Invalid input','New password and confirm password do not match. Please try again!');
        }
      }
    });
  }

  checkPasswords( form ){
    return ( form.value['password'] != form.value['confirmpassword'] ) ? false : true;
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

  goToLogin(){
    this.navCtrl.navigateBack('login');
  }
}
