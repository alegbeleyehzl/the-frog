import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DatabaseService } from '../service/database.service';


@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  public score: number;
  public totalItems: number;
  public rating: number;
  public image: String;
  public msg: String;
  public percentage: number;
  public topicId: number;
  public type: number;
  public assessmentType: number;
  public retakes: number = 0;
  public hideComplete : boolean = false;
  public doNotAddRetake: boolean = false;
  user = [];

  // savedAssessment = [];

  private subscription = new Subscription();
  
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private databaseService: DatabaseService,
    private router: Router,
    private platform: Platform,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.score = params['score'];
      this.totalItems = params['totalItems'];
      this.topicId = params['topicId'];
      this.type = params['type'];
      this.assessmentType = params['assessmentType'];
      if( typeof params['retakes'] != 'undefined' ) this.retakes = params['retakes']; 

      if( this.type > 1 ){
        this.doNotAddRetake = ( typeof params['referrer'] != 'undefined' && params['referrer'] == 'assessment' ) ? true : false;
        this.hideComplete = ( this.assessmentType == 1 && params['retakes'] > 0 ) ? true : false;
      } else {
        this.doNotAddRetake = false;
        this.hideComplete = false;
      }

      console.log( params );
      console.log( 'hide complete', this.hideComplete );
    });

    this.databaseService.checkCurrentUser().subscribe(res => {
      if( res['values'].length > 0 ) {
        this.user = res['values']['0'];
      }
    });


    // Compute percentage
    this.percentage = (100 * this.score) / this.totalItems;
    switch( true ){
      case this.percentage >= 80 && this.percentage > 50:
        this.rating = 1; //'High';
        this.image = 'well-done.svg';
        this.msg = 'Congratulations!';
        break;
      case this.percentage >= 50 && this.percentage > 10:
        this.rating = 2;//'Average';
        this.image = 'well-done.svg';
        this.msg = 'Well done!';
        break;
      case this.percentage >=10 && this.percentage >= 1:
        this.rating = 3; //'Low';
        this.image = 'study.svg';
        this.msg = 'Score too low!';
        break;
      case this.percentage == 0:
        this.rating = 4; //'Fail';
        this.image = 'study.svg';
        this.msg = 'Failed!';
        break;
    }
    
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // this prevents default back button behaviour
    });
  }

  completeTopic(){
    if( !this.doNotAddRetake ) this.retakes++;
    
    // check if type is quiz or assessment
    if( this.type > 1 ){
      // assessment
      let params = {
        userId: this.user['id'],
        assessmentType: this.assessmentType,
        score: this.score,
        rating: this.rating,
        retakes: this.retakes,
        status: 1,
      };

      this.databaseService.updateUAssessment(params);
      this.router.navigateByUrl('/home/dashboard', { replaceUrl: true });
    } else {
      // quiz
      let params = {
        userId: this.user['id'],
        topicId: this.topicId,
        score: this.score,
        rating: this.rating,
        status: 1,
      };

      this.databaseService.updateUTopic(params);
      this.backToTopics();
    }
  }

  backToAssessment(){
    this.router.navigateByUrl('/home/settings', { replaceUrl: true });
  }

  backToTopics(){
    this.router.navigateByUrl('/home/topics', { replaceUrl: true });
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
          topicId : this.topicId,
          type : this.type,
          assessmentType: this.assessmentType
      }
    };

    this.navCtrl.navigateForward(["quiz"], navigationExtras);
  }
}
