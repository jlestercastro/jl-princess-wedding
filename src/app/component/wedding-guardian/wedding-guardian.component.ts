import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface Guardian {
  id: number;
  name: string;
  role: string;
  category: 'parents' | 'godparents' | 'grandparents' | 'special';
  photo: string;
  relationship: string;
  bio: string;
  message?: string;
  advice?: string;
  yearsKnown?: number;
  funFact?: string;
  shortMessage?: string;
  featured?: boolean;
  order?: number;
}

@Component({
  selector: 'app-wedding-guardian',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './wedding-guardian.component.html',
  styleUrl: './wedding-guardian.component.scss'
})
export class WeddingGuardianComponent {
// Modal state
  modalActive: boolean = false;
  selectedGuardian: Guardian | null = null;
  selectedGuardianIndex: number = 0;

  // Sample data
  guardians: Guardian[] = [
    // Parents of the Bride
    {
      id: 1,
      name: 'Mr. & Mrs. Reynaldo and Norilie Manalo',
      role: 'Parents of the Bride',
      category: 'parents',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759803388/bride_guardian_p6rewa.jpg',
      relationship: 'Princess\'s Loving Parents',
      bio: 'For 35 wonderful years, Reynaldo and Norilie have built a beautiful life together, raising Princess with endless love, wisdom, and support. They are the foundation of our family.',
      message: 'Seeing our daughter find someone who cherishes her as much as JL does has been our greatest wish come true. Their love story is everything we prayed for.',
      advice: 'Always remember that marriage is a partnership. Support each other\'s dreams, communicate openly, and never stop dating each other.',
      yearsKnown: 28,
      funFact: 'They met in college and have been inseparable ever since, celebrating 35 years of marriage this year.',
      shortMessage: 'Our greatest wish come true',
      featured: true,
      order: 1
    },
    {
      id: 2,
      name: 'Mr. & Mrs. Apolinario Jr. and Cherry Castro',
      role: 'Parents of the Groom',
      category: 'parents',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759802544/groom_guardian_c46spx.jpg',
      relationship: 'JL\'s Wonderful Parents',
      bio: 'Apolinario and Cherry have been pillars of strength and love in JL\'s life. Their 29-year marriage is a beautiful example of commitment, faith, and partnership.',
      message: 'Watching JL grow into the man he is today has been our greatest joy. Seeing him find his perfect match in Princess fills our hearts with happiness.',
      advice: 'Never go to bed angry. Always kiss goodnight and start each day with gratitude for having each other.',
      yearsKnown: 29,
      funFact: 'They still have weekly date nights and love trying new restaurants together.',
      shortMessage: 'Our hearts are filled with joy',
      featured: true,
      order: 2
    },
  ];

  // Get guardians by category
  get parents(): Guardian[] {
    return this.guardians
      .filter(guardian => guardian.category === 'parents')
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  get godparents(): Guardian[] {
    return this.guardians
      .filter(guardian => guardian.category === 'godparents')
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  get grandparents(): Guardian[] {
    return this.guardians
      .filter(guardian => guardian.category === 'grandparents')
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  get specialGuardians(): Guardian[] {
    return this.guardians
      .filter(guardian => guardian.category === 'special')
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  // Get category title
  getCategoryTitle(category: string): string {
    const titles: { [key: string]: string } = {
      'parents': 'Our Beloved Parents',
      'godparents': 'Godparents',
      'grandparents': 'Grandparents',
      'special': 'Special Guardians'
    };
    return titles[category] || category;
  }

  // Get category icon
  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'parents': 'bi-people-fill',
      'godparents': 'bi-stars',
      'grandparents': 'bi-flower1',
      'special': 'bi-award'
    };
    return icons[category] || 'bi-person';
  }

  // Open guardian modal
  openGuardianModal(index: number, category: string): void {
    let members: Guardian[] = [];
    switch (category) {
      case 'parents': members = this.parents; break;
      case 'godparents': members = this.godparents; break;
      case 'grandparents': members = this.grandparents; break;
      case 'special': members = this.specialGuardians; break;
    }
    
    this.selectedGuardianIndex = index;
    this.selectedGuardian = members[index];
    this.modalActive = true;
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  closeModal(): void {
    this.modalActive = false;
    this.selectedGuardian = null;
    document.body.style.overflow = '';
  }

  // Navigate to next guardian
  nextGuardian(): void {
    if (this.selectedGuardian) {
      const currentCategory = this.selectedGuardian.category;
      let members: Guardian[] = [];
      
      switch (currentCategory) {
        case 'parents': members = this.parents; break;
        case 'godparents': members = this.godparents; break;
        case 'grandparents': members = this.grandparents; break;
        case 'special': members = this.specialGuardians; break;
      }
      
      if (this.selectedGuardianIndex < members.length - 1) {
        this.selectedGuardianIndex++;
        this.selectedGuardian = members[this.selectedGuardianIndex];
      }
    }
  }

  // Navigate to previous guardian
  previousGuardian(): void {
    if (this.selectedGuardian && this.selectedGuardianIndex > 0) {
      const currentCategory = this.selectedGuardian.category;
      let members: Guardian[] = [];
      
      switch (currentCategory) {
        case 'parents': members = this.parents; break;
        case 'godparents': members = this.godparents; break;
        case 'grandparents': members = this.grandparents; break;
        case 'special': members = this.specialGuardians; break;
      }
      
      this.selectedGuardianIndex--;
      this.selectedGuardian = members[this.selectedGuardianIndex];
    }
  }

  // Get current members count for modal
  get currentMembersCount(): number {
    if (!this.selectedGuardian) return 0;
    let members: Guardian[] = [];
    
    switch (this.selectedGuardian.category) {
      case 'parents': members = this.parents; break;
      case 'godparents': members = this.godparents; break;
      case 'grandparents': members = this.grandparents; break;
      case 'special': members = this.specialGuardians; break;
    }
    
    return members.length;
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (this.modalActive) {
      switch (event.key) {
        case 'Escape':
          this.closeModal();
          break;
        case 'ArrowLeft':
          this.previousGuardian();
          break;
        case 'ArrowRight':
          this.nextGuardian();
          break;
      }
    }
  }

  // Handle image errors
  handleImageError(event: any, guardian: Guardian): void {
    event.target.src = this.getInitialsAvatar(guardian.name);
  }

  private getInitialsAvatar(name: string): string {
    const initials = name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
    
    const svg = `
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#0a2463"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
              fill="white" font-family="Arial, sans-serif" font-size="80" font-weight="bold">
          ${initials}
        </text>
      </svg>
    `;
    return 'data:image/svg+xml;base64,' + btoa(svg);
  }
}
