import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private quizzes = [
    {
      id          : 1, //quizId
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
    ,{
      id          : 4,
      topicId     : 4
    }
    ,{
      id          : 5,
      topicId     : 5
    }
    ,{
      id          : 6,
      topicId     : 6
    }
    ,{
      id          : 7,
      topicId     : 7
    }
    ,{
      id          : 8,
      topicId     : 8
    }
    ,{
      id          : 9,
      topicId     : 9
    }
    ,{
      id          : 10,
      topicId     : 10
    }
    ,{
      id          : 11,
      topicId     : 11
    }
    ,{
      id          : 12,
      topicId     : 12
    }
  ];

  public getQuizzes(): Array<Quiz> {
    return this.quizzes;
  }

  public getQuiz(topicId: number): {} {
    return this.quizzes.find(quiz => quiz.topicId == topicId);
  }
}
