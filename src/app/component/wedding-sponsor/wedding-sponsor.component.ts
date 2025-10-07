import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface Sponsor {
  id: number;
  name: string;
  role: string;
  relationship: string;
  photo: string;
  bio?: string;
  message?: string;
  advice?: string;
  yearsKnown?: number;
  funFact?: string;
  shortMessage?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-wedding-sponsor',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './wedding-sponsor.component.html',
  styleUrl: './wedding-sponsor.component.scss'
})

export class WeddingSponsorComponent {
  sponsors: Sponsor[] = [
    {
      id: 1,
      name: 'Mr. & Mrs. Felixberto and Eden Hatulan',
      role: 'Principal Sponsor',
      relationship: 'Bride\'s Godparents',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791603/hatulan_jzb1bq.jpg',
      bio: 'Married for 35 years, Robert and Elizabeth have been like second parents to Princess. They\'ve watched her grow up and are thrilled to see her start this new chapter with JL.',
      message: 'Seeing Princess and JL together reminds us of our own wedding day. Their love is pure and true, and we couldn\'t be happier for them.',
      advice: 'Always communicate openly and never go to bed angry. Remember that marriage is a partnership where both of you grow together.',
      yearsKnown: 25,
      funFact: 'They renewed their vows last year in the same church where they got married.',
      shortMessage: 'So proud of the beautiful couple you\'ve become',
      featured: false
    },
    {
      id: 2,
      name: 'Mr. & Mrs. Ramil and Noida Castro',
      role: 'Principal Sponsor',
      relationship: 'Groom\'s Uncle & Aunt',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791606/ramil_castro_fmopfq.jpg',
      bio: 'James and Maria have been married for 28 years and have been incredible role models for JL. They\'ve supported him through every stage of life.',
      message: 'JL has grown into such a wonderful man, and we know Sarah is the perfect partner for him. Their happiness shines through in everything they do.',
      advice: 'Keep dating each other even after marriage. Never stop making time for romance and adventure.',
      yearsKnown: 28,
      funFact: 'They met in college and have been inseparable ever since.',
      shortMessage: 'Your love story inspires us every day',
      featured: false
    },
    {
      id: 3,
      name: 'Mr. & Mrs. Reynante and Sally Yabut',
      role: 'Principal Sponsor',
      relationship: 'Groom\'s Godparent',
      photo: 'assets/images/sponsors/sponsor-3.jpg',
      bio: 'David and Susan have been close friends with both families for over 20 years. They\'ve watched both Sarah and JL grow up and are delighted to see them together.',
      message: 'We\'ve known these two since they were children, and seeing them find each other feels like the most natural thing in the world.',
      advice: 'Remember to laugh together every day. A sense of humor will get you through the toughest times.',
      yearsKnown: 20,
      funFact: 'They run a successful restaurant together that was featured in the local newspaper.',
      shortMessage: 'A perfect match made in heaven'
    },
    {
      id: 4,
      name: 'Mr. & Mrs. Rodel and Cristy Delfino',
      role: 'Principal Sponsor',
      relationship: 'Groom\'s Uncle and Auntie',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791602/delfino_qkjtua.jpg',
      bio: 'Richard and Patricia have been neighbors to Sarah\'s family for 15 years. They\'ve been like grandparents to Sarah and are thrilled to welcome JL into the family.',
      message: 'We\'ve watched Sarah grow into an amazing woman, and JL complements her perfectly. Their love is a beautiful thing to witness.',
      advice: 'Always support each other\'s dreams and be each other\'s biggest cheerleader.',
      yearsKnown: 15,
      funFact: 'They have been traveling the world together for the past 40 years.',
      shortMessage: 'Wishing you a lifetime of happiness'
    },
    {
      id: 5,
      name: 'Mr. & Mrs. Nathan and Jesusana Narsoles',
      role: 'Principal Sponsor',
      relationship: 'Mentors',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791605/narsoles_kfco2h.jpg',
      bio: 'Thomas and Rebecca were professors who mentored both Sarah and JL during their college years. They recognized the special connection between them early on.',
      message: 'We saw the spark between Sarah and JL when they were just students. It\'s wonderful to see that spark has grown into a lasting flame.',
      advice: 'Continue learning and growing together. The best relationships are those where both partners help each other become better people.',
      yearsKnown: 8,
      funFact: 'They both published books together about relationship psychology.',
      shortMessage: 'The perfect academic and personal partnership'
    },
    {
      id: 6,
      name: 'Mr. & Mrs. Fundador and Carmela Chua',
      role: 'Principal Sponsor',
      relationship: 'Neighborhood Guardian',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791759/chua_db2t6z.jpg',
      bio: 'JL and Princess have been friends with Sarah since elementary school. They\'ve been through all of life\'s milestones together and couldn\'t be happier for this new chapter.',
      message: 'We\'ve been waiting for Sarah to find someone as wonderful as JL. Seeing them together brings tears of joy to our eyes.',
      advice: 'Never take each other for granted. Small gestures of love and appreciation mean the most.',
      yearsKnown: 22,
      funFact: 'They were the first couple in their friend group to get married.',
      shortMessage: 'So happy to witness your beautiful journey'
    },
    {
      id: 7,
      name: 'Mr. & Mrs. Tomy and Sonia Manalo',
      role: 'Principal Sponsor',
      relationship: 'Bride\'s Uncle and Auntie',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791607/tomy_l8hqxp.jpg',
      bio: 'JL and Princess have been friends with Sarah since elementary school. They\'ve been through all of life\'s milestones together and couldn\'t be happier for this new chapter.',
      message: 'We\'ve been waiting for Sarah to find someone as wonderful as JL. Seeing them together brings tears of joy to our eyes.',
      advice: 'Never take each other for granted. Small gestures of love and appreciation mean the most.',
      yearsKnown: 22,
      funFact: 'They were the first couple in their friend group to get married.',
      shortMessage: 'So happy to witness your beautiful journey'
    },
    {
      id: 8,
      name: 'Mr. & Mrs. Lito and Malou Rabino',
      role: 'Principal Sponsor',
      relationship: 'Bride\'s Godparent',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791606/rabino_lgmp25.jpg',
      bio: 'Thomas and Rebecca were professors who mentored both Sarah and JL during their college years. They recognized the special connection between them early on.',
      message: 'We saw the spark between Sarah and JL when they were just students. It\'s wonderful to see that spark has grown into a lasting flame.',
      advice: 'Continue learning and growing together. The best relationships are those where both partners help each other become better people.',
      yearsKnown: 8,
      funFact: 'They both published books together about relationship psychology.',
      shortMessage: 'The perfect academic and personal partnership'
    },
    {
      id: 9,
      name: 'Mr. & Mrs. Arnel and Mona Gaud',
      role: 'Principal Sponsor',
      relationship: 'Bride\'s Godparent',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791603/gaud_h2pjud.jpg',
      bio: 'David and Susan have been close friends with both families for over 20 years. They\'ve watched both Sarah and JL grow up and are delighted to see them together.',
      message: 'We\'ve known these two since they were children, and seeing them find each other feels like the most natural thing in the world.',
      advice: 'Remember to laugh together every day. A sense of humor will get you through the toughest times.',
      yearsKnown: 20,
      funFact: 'They run a successful restaurant together that was featured in the local newspaper.',
      shortMessage: 'A perfect match made in heaven'
    },
    {
      id: 10,
      name: 'Mr. & Mrs. Genesis and Kath Castro',
      role: 'Principal Sponsor',
      relationship: 'Groom\'s Uncle and Auntie',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791603/genesis_wqjnpr.jpg',
      bio: 'David and Susan have been close friends with both families for over 20 years. They\'ve watched both Sarah and JL grow up and are delighted to see them together.',
      message: 'We\'ve known these two since they were children, and seeing them find each other feels like the most natural thing in the world.',
      advice: 'Remember to laugh together every day. A sense of humor will get you through the toughest times.',
      yearsKnown: 20,
      funFact: 'They run a successful restaurant together that was featured in the local newspaper.',
      shortMessage: 'A perfect match made in heaven'
    },
    {
      id: 11,
      name: 'Mr. & Mrs. Ian and Riza Jonas',
      role: 'Principal Sponsor',
      relationship: 'Groom\'s Godparent',
      photo: 'assets/images/sponsors/sponsor-3.jpg',
      bio: 'David and Susan have been close friends with both families for over 20 years. They\'ve watched both Sarah and JL grow up and are delighted to see them together.',
      message: 'We\'ve known these two since they were children, and seeing them find each other feels like the most natural thing in the world.',
      advice: 'Remember to laugh together every day. A sense of humor will get you through the toughest times.',
      yearsKnown: 20,
      funFact: 'They run a successful restaurant together that was featured in the local newspaper.',
      shortMessage: 'A perfect match made in heaven'
    },
    {
      id: 12,
      name: 'Mr. & Mrs. Michael and Emy Ballesteros',
      role: 'Principal Sponsor',
      relationship: 'Groom\'s Uncle and Auntie',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791600/ballesteros_knm8vs.jpg',
      bio: 'JL and Princess have been friends with Sarah since elementary school. They\'ve been through all of life\'s milestones together and couldn\'t be happier for this new chapter.',
      message: 'We\'ve been waiting for Sarah to find someone as wonderful as JL. Seeing them together brings tears of joy to our eyes.',
      advice: 'Never take each other for granted. Small gestures of love and appreciation mean the most.',
      yearsKnown: 22,
      funFact: 'They were the first couple in their friend group to get married.',
      shortMessage: 'So happy to witness your beautiful journey'
    },
    {
      id: 13,
      name: 'Mrs. Mariphe Goco',
      role: 'Principal Sponsor',
      relationship: 'Mentor\'s',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791604/marie_qdvy3q.jpg',
      bio: 'JL and Princess have been friends with Sarah since elementary school. They\'ve been through all of life\'s milestones together and couldn\'t be happier for this new chapter.',
      message: 'We\'ve been waiting for Sarah to find someone as wonderful as JL. Seeing them together brings tears of joy to our eyes.',
      advice: 'Never take each other for granted. Small gestures of love and appreciation mean the most.',
      yearsKnown: 22,
      funFact: 'They were the first couple in their friend group to get married.',
      shortMessage: 'So happy to witness your beautiful journey'
    },
    {
      id: 13,
      name: 'Engr. Michael Pedrasa',
      role: 'Principal Sponsor',
      relationship: 'Mentor\'s',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791605/myke_jibnf7.jpg',
      bio: 'JL and Princess have been friends with Sarah since elementary school. They\'ve been through all of life\'s milestones together and couldn\'t be happier for this new chapter.',
      message: 'We\'ve been waiting for Sarah to find someone as wonderful as JL. Seeing them together brings tears of joy to our eyes.',
      advice: 'Never take each other for granted. Small gestures of love and appreciation mean the most.',
      yearsKnown: 22,
      funFact: 'They were the first couple in their friend group to get married.',
      shortMessage: 'So happy to witness your beautiful journey'
    },
    {
      id: 14,
      name: 'Engr. Sayre Collado',
      role: 'Principal Sponsor',
      relationship: 'Groom\'s Mentor',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791604/collado_nrlwov.jpg',
      bio: 'JL and Princess have been friends with Sarah since elementary school. They\'ve been through all of life\'s milestones together and couldn\'t be happier for this new chapter.',
      message: 'We\'ve been waiting for Sarah to find someone as wonderful as JL. Seeing them together brings tears of joy to our eyes.',
      advice: 'Never take each other for granted. Small gestures of love and appreciation mean the most.',
      yearsKnown: 22,
      funFact: 'They were the first couple in their friend group to get married.',
      shortMessage: 'So happy to witness your beautiful journey'
    },
    {
      id: 15,
      name: 'Mr. Antonio Rago',
      role: 'Principal Sponsor',
      relationship: 'Bride\'s Uncle',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791599/anton_nyircv.jpg',
      bio: 'JL and Princess have been friends with Sarah since elementary school. They\'ve been through all of life\'s milestones together and couldn\'t be happier for this new chapter.',
      message: 'We\'ve been waiting for Sarah to find someone as wonderful as JL. Seeing them together brings tears of joy to our eyes.',
      advice: 'Never take each other for granted. Small gestures of love and appreciation mean the most.',
      yearsKnown: 22,
      funFact: 'They were the first couple in their friend group to get married.',
      shortMessage: 'So happy to witness your beautiful journey'
    },
  ];

  // Modal state
  modalActive: boolean = false;
  selectedSponsor: Sponsor | null = null;
  selectedSponsorIndex: number = 0;

  ngOnInit(): void {
    // Component initialization
  }

  // Open sponsor modal
  openSponsorModal(index: number): void {
    this.selectedSponsorIndex = index;
    this.selectedSponsor = this.sponsors[index];
    this.modalActive = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  // Close modal
  closeModal(): void {
    this.modalActive = false;
    this.selectedSponsor = null;
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Navigate to next sponsor
  nextSponsor(): void {
    if (this.selectedSponsorIndex < this.sponsors.length - 1) {
      this.selectedSponsorIndex++;
      this.selectedSponsor = this.sponsors[this.selectedSponsorIndex];
    }
  }

  // Navigate to previous sponsor
  previousSponsor(): void {
    if (this.selectedSponsorIndex > 0) {
      this.selectedSponsorIndex--;
      this.selectedSponsor = this.sponsors[this.selectedSponsorIndex];
    }
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
          this.previousSponsor();
          break;
        case 'ArrowRight':
          this.nextSponsor();
          break;
      }
    }
  }

  // Method to add new sponsor
  addSponsor(sponsor: Sponsor): void {
    this.sponsors.push(sponsor);
  }

  // Method to remove sponsor
  removeSponsor(id: number): void {
    this.sponsors = this.sponsors.filter(sponsor => sponsor.id !== id);
  }

  // Get featured sponsors
  get featuredSponsors(): Sponsor[] {
    return this.sponsors.filter(sponsor => sponsor.featured);
  }

  // Get regular sponsors
  get regularSponsors(): Sponsor[] {
    return this.sponsors.filter(sponsor => !sponsor.featured);
  }

  // Handle image errors
  handleImageError(event: any, member: Sponsor): void {
    event.target.src = this.getInitialsAvatar(member.name);
  }

  private getInitialsAvatar(name: string): string {
    const initials = name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();

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