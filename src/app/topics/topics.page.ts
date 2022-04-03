import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Topic } from '../model/topic';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})


export class TopicsPage implements OnInit {
  public topics: Array<Topic>;

  constructor(
    private navCtrl: NavController,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
  }

  public openTopic(topicId: number): void {

    let navigationExtras: NavigationExtras = {
      queryParams: {
          topicId : topicId
      }
    };

    this.navCtrl.navigateForward(["single-topic"], navigationExtras);
  }

}
