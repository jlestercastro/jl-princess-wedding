import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-couple',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './couple.component.html',
  styleUrl: './couple.component.scss'
})

export class CoupleComponent {
  bride = {
    name: 'Sarah',
    image: 'assets/images/bride.jpg',
    shortBio: 'Daughter of Mr. & Mrs. Johnson'
  };

  groom = {
    name: 'Michael',
    image: 'assets/images/groom.jpg',
    shortBio: 'Son of Mr. & Mrs. Smith'
  };
}
