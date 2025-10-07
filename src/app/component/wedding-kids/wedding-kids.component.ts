import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface WeddingHelper {
  id: number;
  name: string;
  role: string;
  category: 'littleBride' | 'littleGroom' | 'bearer' | 'flowerGirl';
  photo: string;
  age?: number;
  relationship: string;
  bio?: string;
  message?: string;
  funFact?: string;
  shortMessage?: string;
  featured?: boolean;
  order?: number;
}

@Component({
  selector: 'app-wedding-kids',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './wedding-kids.component.html',
  styleUrl: './wedding-kids.component.scss'
})
export class WeddingKidsComponent {
// Modal state
  modalActive: boolean = false;
  selectedHelper: WeddingHelper | null = null;
  selectedHelperIndex: number = 0;

  // Sample data
  weddingHelpers: WeddingHelper[] = [
    // Little Grooms
    {
      id: 1,
      name: 'Zachary Reyn Manalo Castro',
      role: 'Little Groom',
      category: 'littleGroom',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791547/Zach_yku1to.jpg',
      age: 2,
      relationship: 'Son',
      bio: 'Zach is our energetic little son who absolutely adores his uncle. He\'s been practicing walking down the aisle for weeks!',
      message: 'I get to wear a suit just like Daddy JL! I promise to be super serious and not run.',
      funFact: 'Can recite all the dinosaur names and wants to be a paleontologist.',
      shortMessage: 'So excited to be just like Daddy JL',
      featured: true,
      order: 1
    },
    

    // Little Brides
    {
      id: 3,
      name: 'Briella Magsino Castro',
      role: 'Little Bride',
      category: 'littleBride',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791542/briella_oxxgro.jpg',
      age: 1,
      relationship: 'Niece',
      bio: 'Zachary has been looking up to Briella since she was a baby. She\'s been planning her "wedding helper" role for months!',
      message: 'Aunt Sarah is the prettiest bride ever! I\'ll make sure her dress is perfect.',
      funFact: 'Has a collection of 32 dolls and knows all their names and birthdays.',
      shortMessage: 'Can\'t wait to see the pretty dress',
      featured: true,
      order: 1
    },
    

    // Bearer Team
    {
      id: 5,
      name: 'Mark Aram Olla',
      role: 'Ring Bearer',
      category: 'bearer',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759806486/aram_merv90.jpg',
      age: 5,
      relationship: 'Cousin',
      bio: 'Mark is our responsible older cousin who takes his role very seriously. He\'s been practicing with a flashlight for weeks.',
      message: 'I won\'t let the candle go out, I promise! I practiced holding my breath.',
      funFact: 'Won the school science fair with a volcano project.',
      shortMessage: 'Practiced with a flashlight for weeks',
      featured: true,
      order: 1
    },
    {
      id: 6,
      name: 'Eli Dominic Hatulan',
      role: 'Coin Bearer',
      category: 'bearer',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791541/Eli_qja1kk.jpg',
      age: 3,
      relationship: 'Bride\'s Niece',
      bio: 'Eli is the thoughtful big brother of our flower girl. He understands the importance of his role in the ceremony.',
      message: 'I\'ll carry the Bible very carefully and walk super slow.',
      funFact: 'Plays the piano and is learning Beethoven\'s Moonlight Sonata.',
      shortMessage: 'Walking super slow for this important task',
      featured: true,
      order: 2
    },
    {
      id: 7,
      name: 'Elnathan',
      role: 'Veil Bearer',
      category: 'bearer',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791542/elnathan_ezpiek.jpg',
      age: 4,
      relationship: 'Bride\'s Niece',
      bio: 'Elnathan is our careful and precise helper who pays attention to every detail. He\'s excited about his important job.',
      message: 'I practiced with mom\'s scarf so I know exactly what to do!',
      funFact: 'Can solve a Rubik\'s cube in under two minutes.',
      shortMessage: 'Practiced with mom\'s scarf to get it perfect',
      featured: true,
      order: 3
    },

    // Flower Girls
    {
      id: 8,
      name: 'Artemis Manalo Mañibo',
      role: 'Flower Girl',
      category: 'flowerGirl',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791545/artemis_ohcg0q.jpg',
      age: 3,
      relationship: 'Bride\'s Niece',
      bio: 'Artemis is our bubbly flower girl who has been counting down the days to sprinkle petals. She practices with leaves in the backyard.',
      message: 'I\'m going to make the aisle extra pretty with all my flowers!',
      funFact: 'Believes in fairies and leaves them tiny notes in the garden.',
      shortMessage: 'Counting down the days to sprinkle petals',
      order: 1
    },
    {
      id: 9,
      name: 'Athena Reyn Manalo Mañibo',
      role: 'Flower Girl',
      category: 'flowerGirl',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791543/athena_lpnlk9.jpg',
      age: 5,
      relationship: 'Bride\'s Niece',
      bio: 'Athena is our bubbly flower girl who has been counting down the days to sprinkle petals. She practices with leaves in the backyard.',
      message: 'I\'ll throw the flowers like fairy dust! It will be magical!',
      funFact: 'Has an imaginary dragon friend named Sparkles.',
      shortMessage: 'Practicing with confetti for the big day',
      order: 2
    },
    {
      id: 10,
      name: 'Amaris Jade Hatulan',
      role: 'Flower Girl',
      category: 'flowerGirl',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759806397/amaris_qe0bu6.jpg',
      age: 8,
      relationship: 'Bride\'s Niece',
      bio: 'Amaris is our bubbly flower girl who has been counting down the days to sprinkle petals. She practices with leaves in the backyard.',
      message: 'I practiced the flower throw 100 times! It will be perfect!',
      funFact: 'Can do cartwheels all the way across the backyard.',
      shortMessage: 'Watched wedding videos to learn perfect petal scatter',
      order: 3
    },
    {
      id: 8,
      name: 'Sofia Beatriz Candava',
      role: 'Flower Girl',
      category: 'flowerGirl',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791545/sophia_dfnlo1.jpg',
      age: 7,
      relationship: 'Groom\'s Niece',
      bio: 'Sofia is our bubbly flower girl who has been counting down the days to sprinkle petals. She practices with leaves in the backyard.',
      message: 'I\'m going to make the aisle extra pretty with all my flowers!',
      funFact: 'Believes in fairies and leaves them tiny notes in the garden.',
      shortMessage: 'Counting down the days to sprinkle petals',
      order: 1
    },
    {
      id: 9,
      name: 'Blythe Rayos Marasigan',
      role: 'Flower Girl',
      category: 'flowerGirl',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791544/blythe_sjraq3.jpg',
      age: 3,
      relationship: 'Groom\'s Niece',
      bio: 'Blythe is our bubbly flower girl who has been counting down the days to sprinkle petals. She practices with leaves in the backyard.',
      message: 'I\'ll throw the flowers like fairy dust! It will be magical!',
      funFact: 'Has an imaginary dragon friend named Sparkles.',
      shortMessage: 'Practicing with confetti for the big day',
      order: 2
    },
    {
      id: 10,
      name: 'Kylie Rayos Marasigan',
      role: 'Flower Girl',
      category: 'flowerGirl',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791542/kylie_pp8k3a.jpg',
      age: 5,
      relationship: 'Groom\'s Niece',
      bio: 'Kylie is our bubbly flower girl who has been counting down the days to sprinkle petals. She practices with leaves in the backyard.',
      message: 'I practiced the flower throw 100 times! It will be perfect!',
      funFact: 'Can do cartwheels all the way across the backyard.',
      shortMessage: 'Watched wedding videos to learn perfect petal scatter',
      order: 3
    },
    {
      id: 8,
      name: 'Dahlia Ysabelle Lastimosa',
      role: 'Flower Girl',
      category: 'flowerGirl',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791545/ysa_onrk6x.jpg',
      age: 2,
      relationship: 'Groom\'s Niece',
      bio: 'Ysabelle is our bubbly flower girl who has been counting down the days to sprinkle petals. She practices with leaves in the backyard.',
      message: 'I\'m going to make the aisle extra pretty with all my flowers!',
      funFact: 'Believes in fairies and leaves them tiny notes in the garden.',
      shortMessage: 'Counting down the days to sprinkle petals',
      order: 1
    },
    {
      id: 9,
      name: 'Ysaiah Mavreille Marasigan',
      role: 'Flower Girl',
      category: 'flowerGirl',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791543/mavmav_msezfb.jpg',
      age: 4,
      relationship: 'Bride\'s Niece',
      bio: 'Mavreille is our bubbly flower girl who has been counting down the days to sprinkle petals. She practices with leaves in the backyard.',
      message: 'I\'ll throw the flowers like fairy dust! It will be magical!',
      funFact: 'Has an imaginary dragon friend named Sparkles.',
      shortMessage: 'Practicing with confetti for the big day',
      order: 2
    },
    {
      id: 10,
      name: 'Kyrah Andrea Chua',
      role: 'Flower Girl',
      category: 'flowerGirl',
      photo: 'https://res.cloudinary.com/ddds8zwgx/image/upload/v1759791545/kyrah_zt6tim.jpg',
      age: 8,
      relationship: 'Bride\'s Niece',
      bio: 'Kyrah is our bubbly flower girl who has been counting down the days to sprinkle petals. She practices with leaves in the backyard.',
      message: 'I practiced the flower throw 100 times! It will be perfect!',
      funFact: 'Can do cartwheels all the way across the backyard.',
      shortMessage: 'Watched wedding videos to learn perfect petal scatter',
      order: 3
    }
  ];

  // Get helpers by category
  get littleGrooms(): WeddingHelper[] {
    return this.weddingHelpers
      .filter(helper => helper.category === 'littleGroom')
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  get littleBrides(): WeddingHelper[] {
    return this.weddingHelpers
      .filter(helper => helper.category === 'littleBride')
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  get bearers(): WeddingHelper[] {
    return this.weddingHelpers
      .filter(helper => helper.category === 'bearer')
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  get flowerGirls(): WeddingHelper[] {
    return this.weddingHelpers
      .filter(helper => helper.category === 'flowerGirl')
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  // Get category title
  getCategoryTitle(category: string): string {
    const titles: { [key: string]: string } = {
      'littleGroom': 'Little Groom',
      'littleBride': 'Little Bride', 
      'bearer': 'Bearer Team',
      'flowerGirl': 'Flower Girls'
    };
    return titles[category] || category;
  }

  // Get category icon
  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'littleGroom': 'bi-emoji-smile',
      'littleBride': 'bi-emoji-smile',
      'bearer': 'bi-gem',
      'flowerGirl': 'bi-flower1'
    };
    return icons[category] || 'bi-person';
  }

  // Open helper modal
  openHelperModal(index: number, category: string): void {
    let members: WeddingHelper[] = [];
    switch (category) {
      case 'littleGroom': members = this.littleGrooms; break;
      case 'littleBride': members = this.littleBrides; break;
      case 'bearer': members = this.bearers; break;
      case 'flowerGirl': members = this.flowerGirls; break;
    }
    
    this.selectedHelperIndex = index;
    this.selectedHelper = members[index];
    this.modalActive = true;
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  closeModal(): void {
    this.modalActive = false;
    this.selectedHelper = null;
    document.body.style.overflow = '';
  }

  // Navigate to next helper
  nextHelper(): void {
    if (this.selectedHelper) {
      const currentCategory = this.selectedHelper.category;
      let members: WeddingHelper[] = [];
      
      switch (currentCategory) {
        case 'littleGroom': members = this.littleGrooms; break;
        case 'littleBride': members = this.littleBrides; break;
        case 'bearer': members = this.bearers; break;
        case 'flowerGirl': members = this.flowerGirls; break;
      }
      
      if (this.selectedHelperIndex < members.length - 1) {
        this.selectedHelperIndex++;
        this.selectedHelper = members[this.selectedHelperIndex];
      }
    }
  }

  // Navigate to previous helper
  previousHelper(): void {
    if (this.selectedHelper && this.selectedHelperIndex > 0) {
      const currentCategory = this.selectedHelper.category;
      let members: WeddingHelper[] = [];
      
      switch (currentCategory) {
        case 'littleGroom': members = this.littleGrooms; break;
        case 'littleBride': members = this.littleBrides; break;
        case 'bearer': members = this.bearers; break;
        case 'flowerGirl': members = this.flowerGirls; break;
      }
      
      this.selectedHelperIndex--;
      this.selectedHelper = members[this.selectedHelperIndex];
    }
  }

  // Get current members count for modal
  get currentMembersCount(): number {
    if (!this.selectedHelper) return 0;
    let members: WeddingHelper[] = [];
    
    switch (this.selectedHelper.category) {
      case 'littleGroom': members = this.littleGrooms; break;
      case 'littleBride': members = this.littleBrides; break;
      case 'bearer': members = this.bearers; break;
      case 'flowerGirl': members = this.flowerGirls; break;
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
          this.previousHelper();
          break;
        case 'ArrowRight':
          this.nextHelper();
          break;
      }
    }
  }

  // Handle image errors
  handleImageError(event: any, helper: WeddingHelper): void {
    event.target.src = this.getInitialsAvatar(helper.name);
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
