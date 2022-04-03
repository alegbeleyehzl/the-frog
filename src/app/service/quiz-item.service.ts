import { Injectable } from '@angular/core';
import { QuizItem } from '../model/quiz-item';

@Injectable({
  providedIn: 'root'
})
export class QuizItemService {

  private items = [
    {
      id          : 1,
      quizId      : 1,
      question    : 'Lorem ipsum dolor set amet?',
      choices     : ['Choice A', 'Choice B', 'Choice C', 'Choice D'],
      answer      : 'Choice A',
    }
    ,{
      id          : 2,
      quizId      : 1,
      question    : 'Lorem ipsum dolor set amet?',
      choices     : ['Choice E', 'Choice F', 'Choice G', 'Choice H'],
      answer      : 'Choice H',
    }
    ,{
      id          : 3,
      quizId      : 1,
      question    : 'Lorem ipsum dolor set amet?',
      choices     : ['Choice I', 'Choice J', 'Choice K', 'Choice L'],
      answer      : 'Choice K',
    }
  ];

  public getItems( quizId: number ): {} {
    return this.items.filter( item => item.quizId == quizId );
  } 
}
