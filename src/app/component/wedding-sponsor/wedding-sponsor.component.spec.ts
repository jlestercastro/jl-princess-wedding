import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingSponsorComponent } from './wedding-sponsor.component';

describe('WeddingSponsorComponent', () => {
  let component: WeddingSponsorComponent;
  let fixture: ComponentFixture<WeddingSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingSponsorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
