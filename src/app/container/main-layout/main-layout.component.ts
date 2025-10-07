import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoupleComponent } from '../../component/couple/couple.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { HeaderComponent } from '../../component/header/header.component';
import { MoodboardComponent } from '../../component/moodboard/moodboard.component';
import { SliderComponent } from '../../component/slider/slider.component';
import { SupplierComponent } from '../../component/supplier/supplier.component';
import { WeddingCountdownComponent } from '../../component/wedding-countdown/wedding-countdown.component';
import { WeddingGuardianComponent } from '../../component/wedding-guardian/wedding-guardian.component';
import { WeddingKidsComponent } from '../../component/wedding-kids/wedding-kids.component';
import { WeddingPartyComponent } from '../../component/wedding-party/wedding-party.component';
import { WeddingSponsorComponent } from '../../component/wedding-sponsor/wedding-sponsor.component';
import { WeddingWhenWhereComponent } from '../../component/wedding-when-where/wedding-when-where.component';
import { WelcomeComponent } from '../../component/welcome/welcome.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterModule,
    SliderComponent,
    WelcomeComponent,
    FooterComponent,
    SupplierComponent,
    MoodboardComponent,
    WeddingCountdownComponent,
    CoupleComponent,
    HeaderComponent,
    WeddingSponsorComponent,
    WeddingPartyComponent,
    WeddingKidsComponent,
    WeddingWhenWhereComponent,
    WeddingGuardianComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})

export class MainLayoutComponent {
  
}
