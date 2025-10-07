import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
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
  @Input() isGallery: boolean = false;
  isSticky: boolean = false;
  mobileMenuOpen = false;
  isMobileView = false;

  navItem: any[] = [
    {
      link: '/',
      label: 'Home'
    },
    {
      link: '/gallery',
      label: 'Gallery'
    },
    {
      link: '#couple',
      label: 'Couple'
    },
    {
      link: '#story',
      label: 'Story'
    },
    {
      link: '#people',
      label: 'People'
    },
    {
      link: '#event',
      label: 'Event'
    },
    {
      link: '#rsvp',
      label: 'Rsvp'
    },
    {
      link: '#supplier',
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
    if (this.isGallery) {
      this.isSticky = true;
    } else {
      this.isSticky = window.pageYOffset > 100;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  peopleDropdownOpen: boolean = false;

  // Add this method to your component
  togglePeopleDropdown(): void {
    this.peopleDropdownOpen = !this.peopleDropdownOpen;
  }

  // Update your closeMobileMenu method to also close the dropdown
  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.peopleDropdownOpen = false;
  }
}
