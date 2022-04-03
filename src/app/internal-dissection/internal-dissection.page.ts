import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Frog } from '../model/frog';
import { FrogService } from '../service/frog.service';

@Component({
  selector: 'app-internal-dissection',
  templateUrl: './internal-dissection.page.html',
  styleUrls: ['./internal-dissection.page.scss'],
})
export class InternalDissectionPage implements OnInit {
  public frogOrgans         : Array<Frog>;
  public currentFrogDisplay : Array<Frog>;
  public actionCounter      : number = 0;
  public title              : String;
  public description        : String;
  public defaultTitle        = 'Instructions';
  public defaultDescription  = 'Select an action from the + button. To lift and emphasize an organ, click on the [forceps] and [scalpel] to remove the organ from the Frog.'

  constructor(
    private navCtrl: NavController,
    private frogService: FrogService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.frogOrgans = this.frogService.getFrogOrgans();
    if( this.frogOrgans ) this.currentFrogDisplay = this.frogOrgans.filter( organ => organ.id == this.actionCounter );
    this.title = this.defaultTitle;
    this.description = this.defaultDescription;
  }

  actionHandler( action ){
    let title = '', description = '';

    if( this.currentFrogDisplay[0]['id'] < 23 ){
      if( action == 1 ){
        if( this.currentFrogDisplay[0]['action'] == 0 ) this.actionCounter++
        else this.showErrorAlert()
      } else {
        if( this.currentFrogDisplay[0]['action'] == 1 ) this.actionCounter++
        else this.actionCounter = this.actionCounter + 2;
  
        title = this.defaultTitle;
        description = this.defaultDescription;
      }
  
      this.currentFrogDisplay = this.frogOrgans.filter( organ => organ.id == this.actionCounter );
      this.title = ( title != '' ) ? title : this.currentFrogDisplay[0]['name'];
      this.description = ( description != '' ) ? description : this.currentFrogDisplay[0]['description'];
    } else {
      this.showCompletedAlert();
    }
    
  }

  showCompletedAlert() {
    this.alertController.create({
      header    : 'Exercise complete!',
      message   : 'Congratulations! You have completed both External and Internal Frog dissections.',
      buttons: [
        {
          text: 'BACK TO HOME',
          handler: (data: any) => {
            this.navCtrl.navigateForward('home/dashboard');
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  showErrorAlert(){
    this.alertController.create({
      header    : 'Invalid action!',
      message   : 'You have to remove the currently lifted organ in order to lift another.',
      buttons   : ['OK']
    }).then(res => {
      res.present();
    });
  }

}
