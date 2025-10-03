import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSponsorComponent } from './principal-sponsor.component';

describe('PrincipalSponsorComponent', () => {
  let component: PrincipalSponsorComponent;
  let fixture: ComponentFixture<PrincipalSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalSponsorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
