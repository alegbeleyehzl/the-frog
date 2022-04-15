import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { AuthenticationService } from './service/authentication.service';
import { DatabaseService } from './service/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private databaseService: DatabaseService,
    private loadingCtrl: LoadingController,
    private authenticationService: AuthenticationService,
    private router: Router,
    ) { 
      this.initializeApp();
    }

    async initializeApp() {
      this.platform.ready().then(async () => {
        const loading = await this.loadingCtrl.create();
        await loading.present();

        this.databaseService.init();
        this.databaseService.dbReady.subscribe(isReady => {
          if (isReady) {
            loading.dismiss();
            // this.authenticationService.authState.subscribe(state => {
            //   loading.dismiss();

            //   if (state) {
            //     this.router.navigate(['home/dashboard']);
            //   } else {
            //     this.router.navigate(['login']);
            //   }
            // });
          }
        });
      });
    }
}
