import { TestBed } from '@angular/core/testing';

import { OpenJoinLeaderboardService } from './open-join-leaderboard.service';

describe('OpenJoinLeaderboardService', () => {
  let service: OpenJoinLeaderboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenJoinLeaderboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
