import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingGuardianComponent } from './wedding-guardian.component';

describe('WeddingGuardianComponent', () => {
  let component: WeddingGuardianComponent;
  let fixture: ComponentFixture<WeddingGuardianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingGuardianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
