import { Component, OnInit, ViewChild } from '@angular/core';
import { Frog } from '../model/frog';
import { FrogService } from '../service/frog.service';
import { AlertController, IonSlides, NavController } from '@ionic/angular';
import { Image } from '../model/image';

@Component({
  selector: 'app-dissection',
  templateUrl: './dissection.page.html',
  styleUrls: ['./dissection.page.scss'],
})
export class DissectionPage implements OnInit {
  public frogDissectionParts: Array<Frog>;
  public frogOrgans: Array<Frog>;
  public currentFrogDisplay: Array<Frog>;
  public actionCounter: number = 1;
  public images: Array<Image>;
  @ViewChild('sliderWithNavigation', { static: false }) sliderWithNavigation: IonSlides;

  isHidden = true;
  gallerySlider: any;

  sliderOptions = {
    initialSlide    : 0,
    slidesPerView   : 1,
    loop            : false,
    centeredSlides  : true,
    spaceBetween    : 20
  };

  constructor(
    private frogService: FrogService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.frogDissectionParts = this.frogService.getFrogDissectionParts();
    if( this.frogDissectionParts ) this.currentFrogDisplay = this.frogDissectionParts.filter( part => part.id == this.actionCounter );

    this.gallerySlider = {
      isBeginningSlide  : true,
      isEndSlide        : false,
      slidesItems       : this.images
    };
  }

  actionHandler(action){
    if( this.currentFrogDisplay[0]['action'] > 0 ){
      if( action == this.currentFrogDisplay[0]['action'] ){
        this.actionCounter++;
        this.currentFrogDisplay = this.frogDissectionParts.filter( part => part.id == this.actionCounter );
        if( this.currentFrogDisplay[0]['id'] == 6 ) this.showAlert();
      }
    } else {
      this.showAlert();
    }
  }

  showAlert() {
    this.alertController.create({
      header    : 'Exercise complete!',
      message   : 'Click NEXT to proceed to the next exercise and learn more about each internal organ.',
      buttons: [
        {
          text: 'NEXT',
          handler: (data: any) => {
            this.navCtrl.navigateForward('internal-dissection');
          }
        }
      ]
    }).then(res => {
      res.present();
    });

  }

}
