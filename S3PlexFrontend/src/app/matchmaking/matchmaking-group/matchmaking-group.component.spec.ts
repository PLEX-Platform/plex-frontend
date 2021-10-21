import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmakingGroupComponent } from './matchmaking-group.component';

describe('MatchMakingGroupComponent', () => {
  let component: MatchmakingGroupComponent;
  let fixture: ComponentFixture<MatchmakingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchmakingGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmakingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
