import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SettingsMenu } from '../model/settings-menu';
import { SettingsMenuService } from '../service/settings-menu.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public items: Array<SettingsMenu>;

  constructor(
    private navCtrl: NavController,
    private settingsMenuService: SettingsMenuService
  ) { }

  ngOnInit() {
    this.items = this.settingsMenuService.getItems();
  }

  public openItem(itemUrl: string): void {
    // this.navCtrl.navigateForward(["details", itemId]);
    this.navCtrl.navigateForward(itemUrl);
  }

}
