import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinLeaderboardModalComponent } from './join-leaderboard-modal.component';

describe('JoinLeaderboardModalComponent', () => {
  let component: JoinLeaderboardModalComponent;
  let fixture: ComponentFixture<JoinLeaderboardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinLeaderboardModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinLeaderboardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
