import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './container/main-layout/main-layout.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainLayoutComponent,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'JLC-MPM-Wedding';
}
