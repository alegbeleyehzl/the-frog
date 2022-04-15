import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../service/authentication.service';
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
    public toastController: ToastController,
    private alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router,
    private loadingController: LoadingController,
    ) { }

  ngOnInit() {
    
  }

  async onSubmit( form ){
    const loading = await this.loadingController.create();
    await loading.present();;

    this.databaseService.checkUsername(form.value).subscribe(res => {
      if( res['values'].length <= 0 ) {
        this.databaseService.registerUser(form.value);
        
        this.databaseService.getUsers().subscribe(res => {
          let resp = res['values'].filter( user => user.username == form.value['username'] );
          if( resp.length > 0 ) {

            let utopics = [
              { "topicId": 1, "status": 0, "quizId": 1, "score": 3, "rating": 1, "userId": resp[0]['id'] },
              { "topicId": 2, "status": 0, "quizId": 2, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 3, "status": 0, "quizId": 3, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 4, "status": 0, "quizId": 4, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 5, "status": 0, "quizId": 5, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 6, "status": 0, "quizId": 6, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 7, "status": 0, "quizId": 7, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 8, "status": 0, "quizId": 8, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 9, "status": 0, "quizId": 9, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 10, "status": 0, "quizId": 10, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 11, "status": 0, "quizId": 11, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 12, "status": 0, "quizId": 12, "score": 0, "rating": 0, "userId": resp[0]['id'] },
              { "topicId": 13, "status": 0, "quizId": 13, "score": 0, "rating": 0, "userId": resp[0]['id'] }
            ];

            utopics.forEach(item => {
              this.databaseService.saveUTopic( item );
            });

            let uassessment = [
              { "assessmentType": 1, "status": 0, "score": 0, "rating": 0, "userId": resp[0]['id'], "retakes": 0 },
              { "assessmentType": 2, "status": 0, "score": 0, "rating": 0, "userId": resp[0]['id'], "retakes": 0 }
            ];

            uassessment.forEach(item => {
              this.databaseService.saveUAssessment( item );
            });

            let params = {
              username: form.value['username'],
              password: form.value['password']
            }

            this.alertController.create({
              header    : 'Congratulations',
              message   : 'You have successfully created a new account. Please click CONTINUE to sign in and start learning!',
              backdropDismiss: false,
              buttons: [
                {
                  text: 'CONTINUE',
                  handler: (data: any) => {
                    this.databaseService.verifyUser(params).subscribe(res => {
                      if( res['values'].length > 0 ) {
                        this.authService.login(res['values']['0']);
                        this.router.navigateByUrl('home/dashboard', { replaceUrl: true });
                      }
                    });
                  }
                }
              ]
            }).then(res => {
              loading.dismiss();
              res.present();
            });
          } else {
            loading.dismiss();
            this.showToast('Registration failed. Please try again.')
          } 
        });
      } else {
        loading.dismiss();
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
