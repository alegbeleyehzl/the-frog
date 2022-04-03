import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  public passwordMatch: Boolean = true;
  public users;

  constructor(
    private databaseService: DatabaseService,
    public navCtrl: NavController,
    public toastController: ToastController
    ) { }

  ngOnInit() {
    
  }

  onSubmit( form ){
    this.databaseService.checkUsername(form.value).subscribe(res => {
      if( res['values'].length <= 0 ) {
        this.databaseService.registerUser(form.value);
        this.databaseService.getUsers().subscribe(res => {
          let resp = res['values'].filter( user => user.username == form.value['username'] );
          if( resp.length > 0 ) this.navCtrl.navigateForward('home/dashboard')
          else this.showToast('Registration failed. Please try again.')
        });
      } else {
        this.showToast('Username already taken.');
      }
    });
  }

  checkPasswords( form ){
    this.passwordMatch = ( form.value['password'] != form.value['confirmpassword'] ) ? false : true;
  }

  showToast(msg) {
    this.toastController.create({
      message: msg,
      position: 'bottom',
      duration: 3000,
      buttons: [ { side: 'end', text: 'Close', role: 'cancel',
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
