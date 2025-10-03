import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingCountdownComponent } from './wedding-countdown.component';

describe('WeddingCountdownComponent', () => {
  let component: WeddingCountdownComponent;
  let fixture: ComponentFixture<WeddingCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingCountdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
