import { TestBed } from '@angular/core/testing';

import { QuizItemService } from './quiz-item.service';

describe('QuizItemService', () => {
  let service: QuizItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
