import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPartyComponent } from './wedding-party.component';

describe('WeddingPartyComponent', () => {
  let component: WeddingPartyComponent;
  let fixture: ComponentFixture<WeddingPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingPartyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
