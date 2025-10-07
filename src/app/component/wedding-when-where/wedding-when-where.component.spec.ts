import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingWhenWhereComponent } from './wedding-when-where.component';

describe('WeddingWhenWhereComponent', () => {
  let component: WeddingWhenWhereComponent;
  let fixture: ComponentFixture<WeddingWhenWhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingWhenWhereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingWhenWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
