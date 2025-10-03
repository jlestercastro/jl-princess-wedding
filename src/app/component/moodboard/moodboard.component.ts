import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-moodboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './moodboard.component.html',
  styleUrl: './moodboard.component.scss'
})
export class MoodboardComponent {
  title = 'MINIMALIST MOTIF';
  subtitle = 'A White and Blue Wedding Celebration';

  colorDescription = `A white and blue wedding motif, particularly one featuring shades like soft ivory, crisp white, navy blue, royal blue, or dusty blue, often evokes a sense of elegance, serenity, and timeless beauty. White, long associated with purity and new beginnings, symbolizes a fresh start and the promise of a lasting union. Blue, a color tied to peace and loyalty, represents trust, stability, and devotion. Together, these colors create a theme that feels classic yet refreshing, perfect for wedding styles ranging from romantic and dreamy to modern and sophisticated, while maintaining a calm and graceful atmosphere.`;

  dressCode = `Kindly grace our celebration in semi-formal attire, beautifully blended with hues of white and blue`;

  // Image gallery data
  weddingImages = [
    {
      src: 'assets/image/motif/ceremony-setup.jpg',
      alt: 'Elegant white and blue wedding decor',
      caption: 'Ceremony Setup'
    },
    {
      src: 'assets/image/motif/table-setting.jpg',
      alt: 'Wedding table setting with blue accents',
      caption: 'Table Setting'
    },
    {
      src: 'assets/image/motif/wedding-cake.jpg',
      alt: 'Wedding cake with white and blue decoration',
      caption: 'Wedding Cake'
    }
  ];

  get imagesToShow() {
    // Use default images for demo purposes
    return this.weddingImages;
  }
}
