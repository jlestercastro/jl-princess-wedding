import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleProfileComponent } from './couple-profile.component';

describe('CoupleProfileComponent', () => {
  let component: CoupleProfileComponent;
  let fixture: ComponentFixture<CoupleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoupleProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
