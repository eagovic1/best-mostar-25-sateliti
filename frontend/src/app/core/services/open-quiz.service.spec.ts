import { TestBed } from '@angular/core/testing';

import { OpenQuizService } from './open-quiz.service';

describe('OpenQuizService', () => {
  let service: OpenQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
