import { Routes } from '@angular/router';
import { GalleryComponent } from './component/gallery/gallery.component';
import { GalleryLayoutComponent } from './container/gallery-layout/gallery-layout.component';
import { MainLayoutComponent } from './container/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent
  },
  {
    path: 'gallery',
    component: GalleryLayoutComponent,
    children: [
      { path: '', component: GalleryComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];
