import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isSticky = false;
  mobileMenuOpen = false;
  isMobileView = false;

  navItem: any[] = [
    {
      link: '/',
      label: 'Home'
    },
    {
      link: '/couple',
      label: 'Couple'
    },
    {
      link: '/story',
      label: 'Story'
    },
    {
      link: '/people',
      label: 'People'
    },
    {
      link: '/event',
      label: 'Event'
    },
    {
      link: '/rsvp',
      label: 'Rsvp'
    },
    {
      link: '/supplier',
      label: 'Supplier'
    },
  ]

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkViewport();
      this.checkScroll();
    }
  }

  @ViewChild('mobileNavOverlay') mobileNavOverlay: any;
  onResize(event: Event) {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobileView = window?.innerWidth <= 768;
    if (!this.isMobileView && this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  checkScroll() {
    this.isSticky = window.pageYOffset > 100;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }
}
