import { Routes } from '@angular/router';
import { SliderComponent } from './component/slider/slider.component';
import { CoupleComponent } from './component/couple/couple.component';
import { StoryComponent } from './component/story/story.component';
import { EntourageComponent } from './component/entourage/entourage.component';
import { EventComponent } from './component/event/event.component';
import { ContactComponent } from './component/contact/contact.component';
import { SupplierComponent } from './component/supplier/supplier.component';

export const routes: Routes = [
  { path: 'home', component: SliderComponent},
  { path: 'couple', component: CoupleComponent},
  { path: 'story', component: StoryComponent},
  { path: 'people', component: EntourageComponent},
  { path: 'event', component: EventComponent},
  { path: 'rsvp', component: ContactComponent},
  { path: 'suppliers', component: SupplierComponent}
];
