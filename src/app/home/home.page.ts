import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private subscription = new Subscription();

  constructor(
    private platform: Platform,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // this prevents default back button behaviour
    });
  }
  
  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

}
