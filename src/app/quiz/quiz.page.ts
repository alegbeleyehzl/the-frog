import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Quiz } from '../model/quiz';
import { QuizItemService } from '../service/quiz-item.service';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  public topicId: number;
  public selectedQuiz: {};
  public quizItems: {};
  public currentQuizItem: [];
  public currentItemNumber: number = 0;
  public score : number = 0;
  public selectedAnswer;
  public type: number;
  public testType: String;

  constructor(
    private quizService: QuizService,
    private itemsService: QuizItemService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    let assessmentType: number = 1;

    this.route.queryParams.subscribe(params => {
      this.topicId = params['topicId'];
      this.type = params['type'];

      if( typeof params['assessmentType'] != 'undefined' ) assessmentType = params['assessmentType'];
       
      if( this.type > 1) {
        this.testType = ( assessmentType == 1 ) ? 'Pre-Test' : 'Post-Test';
        this.countdownTimer();
      } else {
        this.testType = 'Quiz';
      }
    });

    this.currentItemNumber = 0;

    // Fetch the quiz details for the selected topic
    this.selectedQuiz = this.quizService.getQuiz( this.topicId );
    if( this.selectedQuiz == {} || typeof this.selectedQuiz == 'undefined' ) {
      console.log('No quizzes available');
    } else {
      this.quizItems = this.itemsService.getItems( this.selectedQuiz['id'] );
      this.currentQuizItem = this.quizItems[this.currentItemNumber];
    }
  }

  nextQuestion( ){
    this.checkAnswer( this.selectedAnswer );
    this.selectedAnswer = null;

    if( this.currentItemNumber < ( Object.keys(this.quizItems).length - 1 ) ){
      this.currentItemNumber++;
      this.currentQuizItem = this.quizItems[this.currentItemNumber];
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
            score : this.score,
            totalItems: Object.keys(this.quizItems).length,
            topicId : this.topicId,
            type: this.type
        }
      };
  
      this.navCtrl.navigateForward(["score"], navigationExtras);
    }
  }

  checkAnswer( answer ){
    if( this.currentQuizItem['choices'][ answer ] == this.currentQuizItem['answer'] ) this.score++;
  }

  countdownTimer(){
    var minutesToAdd = 45;
    var currentDate = new Date();
    var futureDate = new Date(currentDate.getTime() + minutesToAdd*60000).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = futureDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if( document.getElementById("countdown-number") != null ){
        // Output the result in an element with id="demo"
        document.getElementById("countdown-number").innerHTML = minutes + "m " + seconds + "s "; //hours + "h "+ minutes + "m " + seconds + "s ";
                
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown-number").innerHTML = "EXPIRED";
        }
      }
    }, 1000);
    
  }

}
