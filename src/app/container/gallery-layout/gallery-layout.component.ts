import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from "../../component/gallery/gallery.component";

@Component({
  selector: 'app-gallery-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    GalleryComponent
],
  templateUrl: './gallery-layout.component.html',
  styleUrl: './gallery-layout.component.scss'
})
export class GalleryLayoutComponent {

}
