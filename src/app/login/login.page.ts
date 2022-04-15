import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private subscription = new Subscription();
  user = [];

  constructor( 
    public navCtrl: NavController,
    private databaseService: DatabaseService,
    public toastController: ToastController,
    private loadingController: LoadingController,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private platform: Platform,
  ) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // this prevents default back button behaviour
    });
  }
  
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  async onSubmit( form ) {
    const loading = await this.loadingController.create();
    await loading.present();;

    this.databaseService.verifyUser(form.value).subscribe(res => {
      if( res['values'].length > 0 ) {
        this.authService.login(res['values']['0']);
        loading.dismiss();
        this.router.navigateByUrl('home/dashboard', { replaceUrl: true });
      } else {
        loading.dismiss();
        this.showToast('Incorrect username or password. Please try again.');
      } 
    });
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

  goToRegistration() {
    this.navCtrl.navigateForward('registration');
  }

  goToResetPassword(){
    this.navCtrl.navigateForward('forgot-password');
  }
}
