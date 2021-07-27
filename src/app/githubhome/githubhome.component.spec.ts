import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubhomeComponent } from './githubhome.component';

describe('GithubhomeComponent', () => {
  let component: GithubhomeComponent;
  let fixture: ComponentFixture<GithubhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
