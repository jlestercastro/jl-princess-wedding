import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface WeddingPartyMember {
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
  side: 'groomsmen' | 'bridesmaids' | 'matron-of-honor';
}

@Component({
  selector: 'app-wedding-party',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './wedding-party.component.html',
  styleUrl: './wedding-party.component.scss'
})
export class WeddingPartyComponent {
  // Modal state
  modalActive: boolean = false;
  selectedMember?: WeddingPartyMember | null = null;
  selectedMemberIndex: number = 0;

  // Sample data - can be replaced with @Input() for dynamic data
  weddingParty: WeddingPartyMember[] = [
    // Groomsmen
    {
      id: 1,
      name: 'Marvie Deil Cepillo',
      role: 'Best Man',
      relationship: 'College Friend',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791540/marvie_m51pac.jpg',
      bio: 'Michael has been my best friend and brother for as long as I can remember. We\'ve shared countless adventures and he\'s always been there for me.',
      message: 'Seeing my brother find his perfect match in Sarah has been incredible. They bring out the best in each other.',
      advice: 'Never stop dating each other. Keep the romance alive through small gestures and big adventures.',
      yearsKnown: 28,
      funFact: 'We once went on a spontaneous road trip across the country with only $100 between us.',
      shortMessage: 'The best brother and friend anyone could ask for',
      side: 'groomsmen',
      featured: true
    },
    {
      id: 2,
      name: 'John Paul Rago Manalo',
      role: 'Candle',
      relationship: 'Bride\'s Brother',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791544/paul_wbxfbg.jpg',
      bio: 'David and I lived together throughout college and have been inseparable ever since. He\'s the reason I survived engineering school.',
      message: 'I knew these two were perfect for each other from their first date. The way JL talks about Sarah says it all.',
      advice: 'Communication is everything. Talk about everything, especially the hard stuff.',
      yearsKnown: 10,
      funFact: 'We started a band in college that played exactly one gig before breaking up.',
      shortMessage: 'Four years of shared memories and endless laughter',
      side: 'groomsmen',
      featured: true
    },
    {
      id: 3,
      name: 'Ian Kaisser Ballesteros',
      role: 'Veil',
      relationship: 'Groom\'s Cousin',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791540/ian_zqihvu.jpg',
      bio: 'Robert and I have been friends since we were 5 years old. From little league to college graduations, we\'ve been through it all together.',
      message: 'Watching JL grow into the man he is today has been incredible. Sarah is the perfect addition to his life.',
      advice: 'Always make time for your friends, but remember your partner comes first.',
      yearsKnown: 23,
      funFact: 'We built a treehouse together that\'s still standing in his parents\' backyard.',
      shortMessage: 'From little league to standing by my side today',
      side: 'groomsmen',
      featured: true
    },
    {
      id: 4,
      name: 'John Albert Barcelona',
      role: 'Cord',
      relationship: 'College Friend',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791539/albert_iklbuz.jpg',
      bio: 'James started as a work colleague but quickly became one of my closest friends. His wisdom and humor have gotten me through many tough days.',
      message: 'Working with JL showed me his incredible character. Seeing him with Sarah confirms he found his perfect match.',
      advice: 'Support each other\'s careers and dreams. Be each other\'s biggest cheerleader.',
      yearsKnown: 5,
      funFact: 'We accidentally locked ourselves in the office overnight while working on a project.',
      shortMessage: 'The voice of reason and best golf partner',
      side: 'groomsmen',
      featured: true
    },
    {
      id: 5,
      name: 'John Rovick Manalo',
      role: 'Candle',
      relationship: 'Bride\'s Brother',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791547/rovick_fxljoa.jpg',
      bio: 'Michael has been my best friend and brother for as long as I can remember. We\'ve shared countless adventures and he\'s always been there for me.',
      message: 'Seeing my brother find his perfect match in Sarah has been incredible. They bring out the best in each other.',
      advice: 'Never stop dating each other. Keep the romance alive through small gestures and big adventures.',
      yearsKnown: 28,
      funFact: 'We once went on a spontaneous road trip across the country with only $100 between us.',
      shortMessage: 'The best brother and friend anyone could ask for',
      side: 'groomsmen',
      featured: true
    },
    {
      id: 6,
      name: 'Rondel L. Delfino',
      role: 'Groomsmen',
      relationship: 'Groom\'s Cousin',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791540/rondel_yg3mpx.jpg',
      bio: 'David and I lived together throughout college and have been inseparable ever since. He\'s the reason I survived engineering school.',
      message: 'I knew these two were perfect for each other from their first date. The way JL talks about Sarah says it all.',
      advice: 'Communication is everything. Talk about everything, especially the hard stuff.',
      yearsKnown: 10,
      funFact: 'We started a band in college that played exactly one gig before breaking up.',
      shortMessage: 'Four years of shared memories and endless laughter',
      side: 'groomsmen',
      featured: true
    },
    {
      id: 7,
      name: 'Jerome L. Castro',
      role: 'Cord',
      relationship: 'Groom\'s Brother',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791539/jerome_fiushi.jpg',
      bio: 'Robert and I have been friends since we were 5 years old. From little league to college graduations, we\'ve been through it all together.',
      message: 'Watching JL grow into the man he is today has been incredible. Sarah is the perfect addition to his life.',
      advice: 'Always make time for your friends, but remember your partner comes first.',
      yearsKnown: 23,
      funFact: 'We built a treehouse together that\'s still standing in his parents\' backyard.',
      shortMessage: 'From little league to standing by my side today',
      side: 'groomsmen',
      featured: true
    },
    {
      id: 8,
      name: 'Juztin Carl L. Castro',
      role: 'Groomsmen',
      relationship: 'Groom\'s Brother',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791544/jc_sgulkz.jpg',
      bio: 'James started as a work colleague but quickly became one of my closest friends. His wisdom and humor have gotten me through many tough days.',
      message: 'Working with JL showed me his incredible character. Seeing him with Sarah confirms he found his perfect match.',
      advice: 'Support each other\'s careers and dreams. Be each other\'s biggest cheerleader.',
      yearsKnown: 5,
      funFact: 'We accidentally locked ourselves in the office overnight while working on a project.',
      shortMessage: 'The voice of reason and best golf partner',
      side: 'groomsmen'
    },
    {
      id: 9,
      name: 'John Mark Manalo',
      role: 'Groomsmen',
      relationship: 'Bride\'s Brother',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791546/johnmark_ynmtsj.jpg',
      bio: 'Michael has been my best friend and brother for as long as I can remember. We\'ve shared countless adventures and he\'s always been there for me.',
      message: 'Seeing my brother find his perfect match in Sarah has been incredible. They bring out the best in each other.',
      advice: 'Never stop dating each other. Keep the romance alive through small gestures and big adventures.',
      yearsKnown: 28,
      funFact: 'We once went on a spontaneous road trip across the country with only $100 between us.',
      shortMessage: 'The best brother and friend anyone could ask for',
      side: 'groomsmen'
    },
    {
      id: 10,
      name: 'Jeselito M. Benter',
      role: 'Groomsmen',
      relationship: 'College Friend',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791540/jesi_lro0pn.jpg',
      bio: 'David and I lived together throughout college and have been inseparable ever since. He\'s the reason I survived engineering school.',
      message: 'I knew these two were perfect for each other from their first date. The way JL talks about Sarah says it all.',
      advice: 'Communication is everything. Talk about everything, especially the hard stuff.',
      yearsKnown: 10,
      funFact: 'We started a band in college that played exactly one gig before breaking up.',
      shortMessage: 'Four years of shared memories and endless laughter',
      side: 'groomsmen'
    },
    {
      id: 11,
      name: 'Keneth A. Liwanag',
      role: 'Groomsmen',
      relationship: 'College Friend',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791541/keneth_vyqgmz.jpg',
      bio: 'Robert and I have been friends since we were 5 years old. From little league to college graduations, we\'ve been through it all together.',
      message: 'Watching JL grow into the man he is today has been incredible. Sarah is the perfect addition to his life.',
      advice: 'Always make time for your friends, but remember your partner comes first.',
      yearsKnown: 23,
      funFact: 'We built a treehouse together that\'s still standing in his parents\' backyard.',
      shortMessage: 'From little league to standing by my side today',
      side: 'groomsmen'
    },
    {
      id: 12,
      name: 'Maaño Francis Manalo',
      role: 'Groomsmen',
      relationship: 'Bride\'s Cousin',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791539/francis_uitq9l.jpg',
      bio: 'James started as a work colleague but quickly became one of my closest friends. His wisdom and humor have gotten me through many tough days.',
      message: 'Working with JL showed me his incredible character. Seeing him with Sarah confirms he found his perfect match.',
      advice: 'Support each other\'s careers and dreams. Be each other\'s biggest cheerleader.',
      yearsKnown: 5,
      funFact: 'We accidentally locked ourselves in the office overnight while working on a project.',
      shortMessage: 'The voice of reason and best golf partner',
      side: 'groomsmen'
    },

    // Matron of honor
    {
      id: 50,
      name: 'Elizabeth Hatulan',
      role: 'Matron of Honor',
      relationship: 'Bride\'s Sister',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791537/beth_sivegc.jpg',
      bio: 'My little sister and my first friend. We\'ve shared everything from childhood secrets to adult dreams. She knows me better than anyone.',
      message: 'Watching my sister find someone who cherishes her as much as JL does has been the greatest joy. They\'re perfect together.',
      advice: 'Never go to bed angry. And always kiss each other goodnight.',
      yearsKnown: 25,
      funFact: 'We used to put on fashion shows for our parents every weekend.',
      shortMessage: 'My first friend and forever confidante',
      side: 'matron-of-honor',
      featured: true
    },

    // Bridesmaids
    {
      id: 15,
      name: 'Burney M. Plata',
      role: 'Maid of Honor',
      relationship: 'College Friend',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791538/burney_n05hhm.jpg',
      bio: 'My little sister and my first friend. We\'ve shared everything from childhood secrets to adult dreams. She knows me better than anyone.',
      message: 'Watching my sister find someone who cherishes her as much as JL does has been the greatest joy. They\'re perfect together.',
      advice: 'Never go to bed angry. And always kiss each other goodnight.',
      yearsKnown: 25,
      funFact: 'We used to put on fashion shows for our parents every weekend.',
      shortMessage: 'My first friend and forever confidante',
      side: 'bridesmaids',
      featured: true
    },
    {
      id: 16,
      name: 'Jenny Rose Alillo',
      role: 'Candle',
      relationship: 'Friend',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791538/jen_ntbnkv.jpg',
      bio: 'Emma and I have been best friends since middle school. We\'ve navigated everything from first loves to career changes together.',
      message: 'I\'ve never seen Sarah happier than when she\'s with JL. Their love is genuine and beautiful to witness.',
      advice: 'Keep your own hobbies and friends, but always make time for date nights.',
      yearsKnown: 15,
      funFact: 'We traveled through Europe together after college with nothing but backpacks.',
      shortMessage: 'Fifteen years of friendship and counting',
      side: 'bridesmaids',
      featured: true
    },
    {
      id: 17,
      name: 'Khizcia Naomi Nieto',
      role: 'Veil',
      relationship: 'Groom\'s Niece',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791539/khizcia_cs1qdl.jpg',
      bio: 'Olivia was my college roommate and quickly became like a sister. We survived all-night study sessions and celebrated every success together.',
      message: 'From late-night talks about our dream partners to seeing Sarah find hers, this journey has been incredible.',
      advice: 'Remember to laugh together every single day. It\'s the best medicine.',
      yearsKnown: 8,
      funFact: 'We started a book club that\'s still going strong years later.',
      shortMessage: 'Roommate turned lifelong sister',
      side: 'bridesmaids',
      featured: true
    },
    {
      id: 18,
      name: 'Paulline Lastimosa Tee',
      role: 'Cord',
      relationship: 'Groom\'s Cousin',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791546/pau_a7yvkq.jpg',
      bio: 'Sophia and I grew up together and have been partners in crime since we were toddlers. Family gatherings have always been our special time.',
      message: 'Seeing my cousin find someone who understands and supports her completely warms my heart.',
      advice: 'Family is everything. Keep both your families close and build new traditions together.',
      yearsKnown: 28,
      funFact: 'We used to put on plays for our family every holiday.',
      shortMessage: 'Partner in crime since we were toddlers',
      side: 'bridesmaids',
      featured: true
    }, {
      id: 15,
      name: 'Eloisa Tee',
      role: 'Cord',
      relationship: 'Groom\'s Cousin',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791548/eloisa_boewwm.jpg',
      bio: 'My little sister and my first friend. We\'ve shared everything from childhood secrets to adult dreams. She knows me better than anyone.',
      message: 'Watching my sister find someone who cherishes her as much as JL does has been the greatest joy. They\'re perfect together.',
      advice: 'Never go to bed angry. And always kiss each other goodnight.',
      yearsKnown: 25,
      funFact: 'We used to put on fashion shows for our parents every weekend.',
      shortMessage: 'My first friend and forever confidante',
      side: 'bridesmaids',
      featured: true
    },
    {
      id: 16,
      name: 'Ma. Alexa Navea',
      role: 'Candle',
      relationship: 'Bride\'s Niece',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791538/alexa_qasev2.jpg',
      bio: 'Emma and I have been best friends since middle school. We\'ve navigated everything from first loves to career changes together.',
      message: 'I\'ve never seen Sarah happier than when she\'s with JL. Their love is genuine and beautiful to witness.',
      advice: 'Keep your own hobbies and friends, but always make time for date nights.',
      yearsKnown: 15,
      funFact: 'We traveled through Europe together after college with nothing but backpacks.',
      shortMessage: 'Fifteen years of friendship and counting',
      side: 'bridesmaids',
      featured: true
    },
    {
      id: 17,
      name: 'Josephine Manalo',
      role: 'Veil',
      relationship: 'Bride\'s Cousin',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791538/joy_h1ocdt.jpg',
      bio: 'Olivia was my college roommate and quickly became like a sister. We survived all-night study sessions and celebrated every success together.',
      message: 'From late-night talks about our dream partners to seeing Sarah find hers, this journey has been incredible.',
      advice: 'Remember to laugh together every single day. It\'s the best medicine.',
      yearsKnown: 8,
      funFact: 'We started a book club that\'s still going strong years later.',
      shortMessage: 'Roommate turned lifelong sister',
      side: 'bridesmaids',
      featured: true
    },
    {
      id: 18,
      name: 'Bianca Grace L. Rayos',
      role: 'Cord',
      relationship: 'Groom\'s Cousin',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791541/bianca_doyvu3.jpg',
      bio: 'Sophia and I grew up together and have been partners in crime since we were toddlers. Family gatherings have always been our special time.',
      message: 'Seeing my cousin find someone who understands and supports her completely warms my heart.',
      advice: 'Family is everything. Keep both your families close and build new traditions together.',
      yearsKnown: 28,
      funFact: 'We used to put on plays for our family every holiday.',
      shortMessage: 'Partner in crime since we were toddlers',
      side: 'bridesmaids',
      featured: true
    }, {
      id: 15,
      name: 'Fatima Olla',
      role: 'Bridesmaid',
      relationship: 'Bride\'s Cousin',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791538/fatima_b8xuit.jpg',
      bio: 'My little sister and my first friend. We\'ve shared everything from childhood secrets to adult dreams. She knows me better than anyone.',
      message: 'Watching my sister find someone who cherishes her as much as JL does has been the greatest joy. They\'re perfect together.',
      advice: 'Never go to bed angry. And always kiss each other goodnight.',
      yearsKnown: 25,
      funFact: 'We used to put on fashion shows for our parents every weekend.',
      shortMessage: 'My first friend and forever confidante',
      side: 'bridesmaids',
    },
    {
      id: 16,
      name: 'Elee Nathesa Narsoles',
      role: 'Bridesmaid',
      relationship: 'Best Friend',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791538/elee_vuae5d.jpg',
      bio: 'Emma and I have been best friends since middle school. We\'ve navigated everything from first loves to career changes together.',
      message: 'I\'ve never seen Sarah happier than when she\'s with JL. Their love is genuine and beautiful to witness.',
      advice: 'Keep your own hobbies and friends, but always make time for date nights.',
      yearsKnown: 15,
      funFact: 'We traveled through Europe together after college with nothing but backpacks.',
      shortMessage: 'Fifteen years of friendship and counting',
      side: 'bridesmaids'
    },
    {
      id: 17,
      name: 'Apple Katherine S. Lopez',
      role: 'Bridesmaid',
      relationship: 'Best Friend',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791537/apple_lp6rc7.jpg',
      bio: 'Olivia was my college roommate and quickly became like a sister. We survived all-night study sessions and celebrated every success together.',
      message: 'From late-night talks about our dream partners to seeing Sarah find hers, this journey has been incredible.',
      advice: 'Remember to laugh together every single day. It\'s the best medicine.',
      yearsKnown: 8,
      funFact: 'We started a book club that\'s still going strong years later.',
      shortMessage: 'Roommate turned lifelong sister',
      side: 'bridesmaids'
    },
    {
      id: 18,
      name: 'Sharmaine D. Liwanag',
      role: 'Bridesmaid',
      relationship: 'Friend',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791543/sharmaine_xe9ybb.jpg',
      bio: 'Sophia and I grew up together and have been partners in crime since we were toddlers. Family gatherings have always been our special time.',
      message: 'Seeing my cousin find someone who understands and supports her completely warms my heart.',
      advice: 'Family is everything. Keep both your families close and build new traditions together.',
      yearsKnown: 28,
      funFact: 'We used to put on plays for our family every holiday.',
      shortMessage: 'Partner in crime since we were toddlers',
      side: 'bridesmaids'
    },
  ];

  get matronofHonor(): WeddingPartyMember[] {
    return this.weddingParty.filter(member => member.side === 'matron-of-honor');
  }

  get groomsmen(): WeddingPartyMember[] {
    return this.weddingParty.filter(member => member.side === 'groomsmen');
  }

  get bridesmaids(): WeddingPartyMember[] {
    return this.weddingParty.filter(member => member.side === 'bridesmaids');
  }

  // Open member modal
  openMemberModal(index: number, side: 'groomsmen' | 'bridesmaids' | 'matron-of-honor'): void {
    let members: WeddingPartyMember[] = [];
    switch (side) {
      case 'groomsmen': members = this.groomsmen; break;
      case 'bridesmaids': members = this.bridesmaids; break;
      case 'matron-of-honor': members = this.matronofHonor; break;
      default: members = []; break;
    }

    this.selectedMember = members[index];
    this.selectedMemberIndex = index;
    this.modalActive = true;
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  closeModal(): void {
    this.modalActive = false;
    this.selectedMember = null;
    document.body.style.overflow = '';
  }

  // Navigate to next member
  nextMember(): void {
    if (this.selectedMember) {
      const currentSide = this.selectedMember.side;
      const members = currentSide === 'groomsmen' ? this.groomsmen : this.bridesmaids;

      if (this.selectedMemberIndex < members.length - 1) {
        this.selectedMemberIndex++;
        this.selectedMember = members[this.selectedMemberIndex];
      }
    }
  }

  // Navigate to previous member
  previousMember(): void {
    if (this.selectedMember && this.selectedMemberIndex && this.selectedMemberIndex > 0) {
      const currentSide = this.selectedMember.side;
      const members = currentSide === 'groomsmen' ? this.groomsmen : this.bridesmaids;

      this.selectedMemberIndex--;
      this.selectedMember = members[this.selectedMemberIndex];
    }
  }

  // Get current members count for modal
  get currentMembersCount(): number {
    if (!this.selectedMember) return 0;
    const members = this.selectedMember.side === 'groomsmen' ? this.groomsmen : this.bridesmaids;
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
          this.previousMember();
          break;
        case 'ArrowRight':
          this.nextMember();
          break;
      }
    }
  }

  // Handle image errors
  handleImageError(event: any, member: WeddingPartyMember): void {
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
