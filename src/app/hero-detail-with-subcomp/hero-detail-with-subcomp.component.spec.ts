import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailWithSubcompComponent } from './hero-detail-with-subcomp.component';

describe('HeroDetailWithSubcompComponent', () => {
  let component: HeroDetailWithSubcompComponent;
  let fixture: ComponentFixture<HeroDetailWithSubcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailWithSubcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailWithSubcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
