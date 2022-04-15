import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonSlides, NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { INTRO_KEY } from 'src/app/guards/intro.guard';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
  }
  
  next() {
    this.slides.slideNext();
  }
 
  async start() {
    await Storage.set({key: INTRO_KEY, value: 'true'});
    let navigationExtras: NavigationExtras = {
      queryParams: { topicId : 1, type: 2, assessmentType: 1 }
    };
    this.navCtrl.navigateForward(['quiz'], navigationExtras);
  }

  async proceedToDashboard() {
    await Storage.set({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/home/dashboard', { replaceUrl:true });
  }
}
