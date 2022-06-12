import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.page.html',
  styleUrls: ['./assessment.page.scss'],
})
export class AssessmentPage implements OnInit {

  public user = [];
  public assessments = [];

  constructor(
    private navCtrl: NavController,
    private databaseService: DatabaseService,
  ) { }

  ngOnInit() {
    this.databaseService.checkCurrentUser().subscribe(res => {
      if( res['values'].length > 0 ) {
        this.user = res['values']['0'];

        this.databaseService.getAssessments( this.user['id'] ).subscribe(resp => {
          this.assessments = resp['values'];

          console.log( this.assessments );
        });
      }
    });
  }

  openTest( testType ){
    // testType 1 = pre-test, 2 = post-test;
    
    this.assessments.filter( (item) => {
      if( item.assessmentType == testType ){

        console.log( 'currently selected assessment', item );
        
        if( item['retakes'] > 0 ){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              score : item['score'],
              totalItems: 30,
              topicId : 1,
              type: 2,
              assessmentType: item['assessmentType'],
              retakes: item['retakes'],
              referrer: 'assessment'
            }
          };
      
          this.navCtrl.navigateForward(["score"], navigationExtras);
        } else {
          let navigationExtras: NavigationExtras = {
            queryParams: {
                topicId : 1,
                type: 2,
                assessmentType: testType
            }
          };

          this.navCtrl.navigateForward(["quiz"], navigationExtras);
        }
      }
    });
  }

}
