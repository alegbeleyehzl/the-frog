import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Topic } from '../model/topic';
import { DatabaseService } from '../service/database.service';
import { TopicService } from '../service/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})


export class TopicsPage implements OnInit {
  public topics: Array<Topic>;
  user = [];

  constructor(
    private navCtrl: NavController,
    private topicService: TopicService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute
  ) { 
    route.params.subscribe(val=>{ 
      this.topics = this.topicService.getTopics();
      this.databaseService.checkCurrentUser().subscribe(res => {
        if( res['values'].length > 0 ) {
          this.user = res['values']['0'];
          this.databaseService.getTopics( this.user['id'] ).subscribe(resp => {
            if( resp['values'].length > 0 ) {
  
              // Merge current status (from utopics) with the status (from topics)
              this.topics.forEach(topic => {
                  let match = resp['values'].filter( utopic => utopic.topicId == topic.id );
                  topic['status'] = match[0]['status'];
                  topic['rating'] = match[0]['rating'];
                  topic['score'] = match[0]['score'];
              });
            }
          });
        }
      });
     });
  }

  ngOnInit() {
    
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
