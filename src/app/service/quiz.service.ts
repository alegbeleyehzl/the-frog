import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizzes = [
    {
      id          : 1,
      topicId     : 1
    }
    ,{
      id          : 2,
      topicId     : 2
    }
    ,{
      id          : 3,
      topicId     : 3
    }
  ];

  public getQuizzes(): Array<Quiz> {
    return this.quizzes;
  }

  public getQuiz(topicId: number): {} {
    return this.quizzes.find(quiz => quiz.topicId == topicId);
  }
}
