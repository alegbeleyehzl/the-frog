import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Topic } from '../model/topic';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.page.html',
  styleUrls: ['./single-topic.page.scss'],
})
export class SingleTopicPage implements OnInit {
  public topicId: number;
  public selectedTopic: {};

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.topicId = params['topicId'];
    });
    
    // Fetch topic details from the model
    this.selectedTopic = this.topicService.getTopic( this.topicId );
    console.log( this.selectedTopic );
  }

  openQuiz( topicId ){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          topicId : topicId,
          type: 1
      }
    };

    this.navCtrl.navigateForward(["quiz"], navigationExtras);
  }

  goBackToTopics(){
    this.navCtrl.navigateBack('home/topics');
  }

}
