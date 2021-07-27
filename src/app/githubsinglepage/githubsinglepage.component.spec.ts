import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubsinglepageComponent } from './githubsinglepage.component';

describe('GithubsinglepageComponent', () => {
  let component: GithubsinglepageComponent;
  let fixture: ComponentFixture<GithubsinglepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubsinglepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubsinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
