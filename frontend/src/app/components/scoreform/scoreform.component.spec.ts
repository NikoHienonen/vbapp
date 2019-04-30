import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreformComponent } from './scoreform.component';

describe('ScoreformComponent', () => {
  let component: ScoreformComponent;
  let fixture: ComponentFixture<ScoreformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
