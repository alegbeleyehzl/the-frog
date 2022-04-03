import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  public score: number;
  public totalItems: number;
  public rating: String;
  public image: String;
  public msg: String;
  public percentage: number;
  public topicId: number;
  public type: number;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.score = params['score'];
      this.totalItems = params['totalItems'];
      this.topicId = params['topicId'];
      this.type = params['type'];
    });

    // Compute percentage
    this.percentage = (100 * this.score) / this.totalItems;
    switch( true ){
      case this.percentage >= 80 && this.percentage > 50:
        this.rating = 'High';
        this.image = 'well-done.svg';
        this.msg = 'Congratulations!';
        break;
      case this.percentage >= 50 && this.percentage > 10:
        this.rating = 'Average';
        this.image = 'well-done.svg';
        this.msg = 'Well done!';
        break;
      case this.percentage >=10 && this.percentage >= 1:
        this.rating = 'Low';
        this.image = 'study.svg';
        this.msg = 'Score too low!';
        break;
      case this.percentage == 0:
        this.rating = 'Fail';
        this.image = 'study.svg';
        this.msg = 'Failed!';
        break;
    }
    
  }

  backToTopics(){
    this.navCtrl.navigateBack('home/topics');
  }

  goBackToTopic(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          topicId : this.topicId,
      }
    };

    if( this.type > 1 ) this.navCtrl.navigateBack('home/topics')
    else this.navCtrl.navigateForward(["single-topic"], navigationExtras)
  }

  restartQuiz(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          topicId : this.topicId
      }
    };

    this.navCtrl.navigateForward(["quiz"], navigationExtras);
  }
}
