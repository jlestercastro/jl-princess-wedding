import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

interface QuickLink {
  name: string;
  icon: string;
  url: string;
}
interface Slide {
  image: string;
  title?: string;
  description?: string;
  buttonText?: string;
  link: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})

export class SliderComponent implements  OnInit, OnDestroy {
  currentIndex = 0;
  isQuickAccessExpanded = false;
  private touchStartX = 0;
  private touchEndX = 0;
  private swipeThreshold = 50;

  slides: Slide[] = [
    {
      image: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791569/slider-image-1_nincre.jpg',
      title: 'Our Wedding Story',
      description: 'Join us as we begin our journey together',
      buttonText: 'Our Story',
      link: '#story'
    },
    {
      image: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791568/slider-image-8_a06wov.jpg',
      title: 'The Big Day',
      description: 'October 25, 2025 - Save the date!',
      buttonText: 'Event Details',
      link: '#event'
    },
    {
      image: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791568/slider-image-9_kx8vjp.jpg',
      title: 'Gallery',
      description: 'Our special moments together',
      buttonText: 'View Photos',
      link: '/gallery'
    },
    {
      image: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791572/slider-image-3_ydb3x1.jpg',
      title: 'Gallery',
      description: 'Our special moments together',
      buttonText: 'View Photos',
      link: '/gallery/special-moments'
    },
    {
      image: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791570/slider-image-10_mllbqe.jpg',
      title: 'Gallery',
      description: 'Our special moments together',
      buttonText: 'View Photos',
      link: '/gallery/special-moments'
    },
    {
      image: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791570/slider-image-5_uris3q.jpg',
      title: 'Gallery',
      description: 'Our special moments together',
      buttonText: 'View Photos',
      link: '/gallery/special-moments'
    },
    {
      image: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791571/slider-image-6_x2smmj.jpg',
      title: 'Gallery',
      description: 'Our special moments together',
      buttonText: 'View Photos',
      link: '/gallery/special-moments'
    }
  ];

  quickLinks: QuickLink[] = [
    { name: 'Couple', icon: 'bi bi-heart', url: '/couple' },
    { name: 'Story', icon: 'bi bi-book', url: '/story' },
    { name: 'Gallery', icon: 'bi bi-images', url: '/gallery' },
    { name: 'Events', icon: 'bi bi-calendar', url: '/events' },
    { name: 'Venue', icon: 'bi bi-geo-alt', url: '/venue' },
    { name: 'RSVP', icon: 'bi bi-envelope', url: '/rsvp' }
  ];

  private interval: any;
  private autoSlideInterval: any

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.resetAutoSlide();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  toggleQuickAccess(): void {
    this.isQuickAccessExpanded = !this.isQuickAccessExpanded;
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  // Pause auto-slide on hover (desktop)
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.stopAutoSlide();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.startAutoSlide();
  }

  // Keyboard navigation
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.prevSlide();
        break;
      case 'ArrowRight':
        this.nextSlide();
        break;
      case 'Home':
        this.goToSlide(0);
        break;
      case 'End':
        this.goToSlide(this.slides.length - 1);
        break;
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }
}
