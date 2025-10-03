import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntourageKidsComponent } from './entourage-kids.component';

describe('EntourageKidsComponent', () => {
  let component: EntourageKidsComponent;
  let fixture: ComponentFixture<EntourageKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntourageKidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntourageKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
