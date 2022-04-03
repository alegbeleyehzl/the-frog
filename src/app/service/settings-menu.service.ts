import { Injectable } from '@angular/core';
import { SettingsMenu } from '../model/settings-menu';

@Injectable({
  providedIn: 'root'
})
export class SettingsMenuService {

  private items = [
    {
      id: 1,
      title: "Profile",
      icon: "assets/icon/profile.png",
      url: "profile",
      description:
        "A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.",
      color: "#E63135"
    },
    {
      id: 2,
      title: "Assessment",
      icon: "assets/icon/assessment.png",
      url: "assessment",
      description:
        "The latest version of cascading stylesheets - the styling language of the web!",
      color: "#0CA9EA"
    },
    {
      id: 3,
      title: "About",
      icon: "assets/icon/about.png",
      url: "about",
      description: "The latest version of the web's markup language.",
      color: "#F46529"
    }
  ];

  public getItems(): Array<SettingsMenu> {
    return this.items;
  }

  public getItem(itemId: number): SettingsMenu {
    return this.items.find(item => item.id === itemId);
  }
}
