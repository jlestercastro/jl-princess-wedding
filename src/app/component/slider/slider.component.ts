import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

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
  slides = [
    {
      image: '../../../assets/image/slider/Enhanced_230.jpg',
      title: 'Our Wedding Story',
      description: 'Join us as we begin our journey together',
      buttonText: 'Our Story',
      link: '#story'
    },
    {
      image: '../../../assets/image/slider/Enhanced_247.jpg',
      title: 'The Big Day',
      description: 'October 25, 2025 - Save the date!',
      buttonText: 'Event Details',
      link: '#event'
    },
    {
      image: '../../../assets/image/slider/Enhanced_199.jpg',
      title: 'Gallery',
      description: 'Our special moments together',
      buttonText: 'View Photos',
      link: '/gallery'
    },
    {
      image: '../../../assets/image/slider/Enhanced_269.jpg',
      title: 'Gallery',
      description: 'Our special moments together',
      buttonText: 'View Photos',
      link: '/gallery/special-moments'
    },
    {
      image: '../../../assets/image/slider/Enhanced_160.jpg',
      title: 'Gallery',
      description: 'Our special moments together',
      buttonText: 'View Photos',
      link: '/gallery/special-moments'
    }
  ];

  currentIndex = 0;
  private interval: any;
  private autoSlideInterval = 5000; // 5 seconds

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.clearAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, this.autoSlideInterval);
  }

  clearAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  resetAutoSlide() {
    this.clearAutoSlide();
    this.startAutoSlide();
  }

  // Optional: Add swipe support for touch devices
  @HostListener('window:resize')
  onResize() {
    // Handle responsive behavior if needed
  }
}
