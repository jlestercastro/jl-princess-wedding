import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingKidsComponent } from './wedding-kids.component';

describe('WeddingKidsComponent', () => {
  let component: WeddingKidsComponent;
  let fixture: ComponentFixture<WeddingKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingKidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
