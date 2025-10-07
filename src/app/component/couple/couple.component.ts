import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

interface Person {
  name: string;
  photo: string;
  bio: string;
  facts: Array<{ icon: string; label: string; value: string }>;
  quote?: string;
}

interface LoveStoryEvent {
  date: string;
  description: string;
}

interface FunFact {
  icon: string;
  title: string;
  description: string;
}

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
  bride: Person = {
    name: 'May Princess Rago Manalo',
    photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791526/bride_lwx4pf.jpg',
    bio: 'Princess is a passionate business analyst. She loves traveling, painting, and spending weekends exploring new coffee shops with Michael. Her warm heart and creative spirit light up every room she enters.',
    facts: [
      { icon: 'bi-briefcase', label: 'Profession', value: 'Business Analyst' },
      { icon: 'bi-geo-alt', label: 'Hometown', value: 'Calapan City Or. Mindoro' },
      { icon: 'bi-book', label: 'Education', value: 'Divine Word College of Calapan' },
      { icon: 'bi-heart', label: 'Loves', value: 'Travel, Art, Coffee, Cooking' }
    ],
    quote: 'I knew JL was the one when I realized home wasn\'t a place, but a person.'
  };

  groom: Person = {
    name: 'Jun Lester Lastimosa Castro',
    photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791528/groom_jktypw.jpg',
    bio: 'JL is a software engineer with a passion for innovation and adventure. When he\'s not coding, you can find him hiking mountains, playing guitar, or trying to perfect his pizza recipe. His kindness and humor make every day an adventure.',
    facts: [
      { icon: 'bi-briefcase', label: 'Profession', value: 'Software Engineer' },
      { icon: 'bi-geo-alt', label: 'Hometown', value: 'Calapan City Or. Mindoro' },
      { icon: 'bi-book', label: 'Education', value: 'Divine Word College of Calapan' },
      { icon: 'bi-heart', label: 'Loves', value: 'Coding, Running, Cooking, Travel' }
    ],
    quote: 'Princess taught me that the best adventures are the ones we share together.'
  };

  togetherPhoto: string = 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791526/couple-together_dezs3x.jpg';
  togetherSince: string = '2018';

  loveStory: LoveStoryEvent[] = [
    {
      date: 'June 10, 2013',
      description: 'First Met.'
    },
    {
      date: 'June 28, 2017',
      description: 'First Date at Cafe Meow.'
    },
    {
      date: 'April 2018',
      description: 'Graduate together at Divine Word College of Calapan with Bachelor\'s Degree In Computer Engineering.'
    },
    {
      date: 'May-August 2018',
      description: 'Living together in Metro Manila. And Working as professional in private company as Software Engineer and Data Analyst.'
    },
    {
      date: 'March 2019 / October 2019 / February 2020 / February 2022',
      description: 'Local travel exploring the beauty of Philippnes./ March 2019 Baler Aurora / October 2019 Tagaytay / February 2020 Cebu / February 2022 Boracay.'
    },
    {
      date: 'April 2023',
      description: 'Got Engaged.'
    },
    {
      date: 'July 2023',
      description: 'First born child named, ZACHARY REYN MANALO CASTRO'
    },
    {
      date: 'January 2024',
      description: 'Exploring the beauty of Baguio as a family with our first born child (ZACH) and fur baby (HAPPY). Together with our parents.'
    },
    {
      date: 'October 2025',
      description: 'The Wedding'
    },
  ];

  // Slider state
  currentSlideIndex: number = 0;

  // Timeline state
  currentTimelineIndex: number = 0;

  // Lightbox state
  lightboxActive: boolean = false;
  currentPhoto: string = '';
  currentGalleryIndex: number = 0;

  ngOnInit(): void {
    // No auto-slide functionality
  }

  getTimelineIcon(index: number): string {
    const icons = [
      'bi-heart',
      'bi-cup-straw',
      'bi-airplane',
      'bi-house-heart',
      'bi-gem',
      'bi-people-fill'
    ];
    return icons[index] || 'bi-heart';
  }

  // Lightbox methods
  openLightbox(type: string): void {
    switch (type) {
      case 'bride':
        this.currentPhoto = this.bride.photo;
        this.currentGalleryIndex = 0;
        break;
      case 'groom':
        this.currentPhoto = this.groom.photo;
        this.currentGalleryIndex = 0;
        break;
      case 'together':
        this.currentPhoto = this.togetherPhoto;
        this.currentGalleryIndex = 0;
        break;
    }
    this.lightboxActive = true;
  }

  closeLightbox(): void {
    this.lightboxActive = false;
  }
}
