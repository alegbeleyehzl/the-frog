import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.page.html',
  styleUrls: ['./assessment.page.scss'],
})
export class AssessmentPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  openTest( testType ){
    // testType 1 = pre-test, 2 = post-test;
    
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
