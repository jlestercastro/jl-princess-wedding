import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../../component/contact/contact.component';
import { CoupleComponent } from '../../component/couple/couple.component';
import { EntourageComponent } from '../../component/entourage/entourage.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { MoodboardComponent } from '../../component/moodboard/moodboard.component';
import { PrincipalSponsorComponent } from '../../component/principal-sponsor/principal-sponsor.component';
import { SliderComponent } from '../../component/slider/slider.component';
import { StoryComponent } from '../../component/story/story.component';
import { SupplierComponent } from '../../component/supplier/supplier.component';
import { WeddingCountdownComponent } from '../../component/wedding-countdown/wedding-countdown.component';
import { WelcomeComponent } from '../../component/welcome/welcome.component';
import { WhenAndWhereComponent } from '../../component/when-and-where/when-and-where.component';
import { CoupleProfileComponent } from '../../component/couple-profile/couple-profile.component';
import { EntourageKidsComponent } from '../../component/entourage-kids/entourage-kids.component';

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
    EntourageComponent,
    PrincipalSponsorComponent,
    WhenAndWhereComponent,
    WeddingCountdownComponent,
    CoupleProfileComponent,
    EntourageKidsComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})

export class MainLayoutComponent {
}
