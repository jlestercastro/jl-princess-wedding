import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


export interface EntourageMember {
  id: number;
  name: string;
  role: string;
  relationship: string;
  age: string;
  imageUrl: string;
  description: string;
  favoriteThings: string[];
  funFact: string;
}

@Component({
  selector: 'app-entourage-kids',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './entourage-kids.component.html',
  styleUrl: './entourage-kids.component.scss'
})

export class EntourageKidsComponent {
  sectionSubtitle = 'Our Special Little Helpers';

  entourageMembers: EntourageMember[] = [
    {
      id: 1,
      name: 'Zachary Reyn Manalo Castro',
      role: 'Little Groom',
      relationship: 'Groom\'s & Bride\'s Son',
      age: '2 years old',
      imageUrl: 'assets/image/entourage/kids/Zach.jpg',
      description: 'Our energetic little gentleman who can\'t wait to stand by his uncle\'s side. Loves superheroes and telling funny jokes.',
      favoriteThings: ['Superheroes', 'Ice Cream', 'Building Blocks', 'Playing Soccer'],
      funFact: 'Wants to be an astronaut when he grows up'
    },
    {
      id: 2,
      name: 'Briella Magsino Castro',
      role: 'Little Bride',
      relationship: 'Groom\'s & Bride\'s Niece',
      age: '1 years old',
      imageUrl: 'assets/image/entourage/kids/briella.jpg',
      description: 'Our sweet princess who has been practicing her flower girl walk for months. Adores all things sparkly and magical.',
      favoriteThings: ['Unicorns', 'Dancing', 'Pink Dresses', 'Story Time'],
      funFact: 'Can name all the Disney princesses in order'
    },
    {
      id: 3,
      name: 'Mark Aram Olla',
      role: 'Ring Bearer',
      relationship: 'Bride\'s Niece',
      age: '5 years old',
      imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop&crop=face',
      description: 'The responsible big brother who takes his ring-bearing duties very seriously. Loves science experiments and reading.',
      favoriteThings: ['Science Kits', 'Chess', 'Pizza', 'Star Wars'],
      funFact: 'Won his school\'s science fair with a volcano project'
    },
    {
      id: 4,
      name: 'Eli Dominic Hatulan',
      role: 'Coin Bearer',
      relationship: 'Bride\'s Niece',
      age: '5 years old',
      imageUrl: 'assets/image/entourage/kids/Eli.jpg',
      description: 'Our cheerful coin bearer who practices with chocolate coins. Always has a smile that lights up the room.',
      favoriteThings: ['Drawing', 'Swimming', 'Chocolate', 'Dinosaurs'],
      funFact: 'Can count to 100 in three different languages'
    },
    {
      id: 5,
      name: 'Elnathan',
      role: 'Bible Bearer',
      relationship: 'Bride\'s Niece',
      age: '8 years old',
      imageUrl: 'https://images.unsplash.com/photo-1544717305-278b9a4ff091?w=400&h=400&fit=crop&crop=face',
      description: 'The mature big sister who loves helping others. Takes her role as Bible bearer with great honor and responsibility.',
      favoriteThings: ['Reading', 'Piano', 'Baking', 'Helping Mom'],
      funFact: 'Read all the Harry Potter books twice'
    },
    {
      id: 6,
      name: 'Artemis Manalo Mañebo',
      role: 'Flower Girls',
      relationship: 'Twins - Family Friends',
      age: '4 years old',
      imageUrl: 'assets/image/entourage/kids/artemis.jpg',
      description: '',
      favoriteThings: ['Matching Outfits', 'Singing', 'Butterflies', 'Playground'],
      funFact: 'They have their own secret twin language'
    },
    {
      id: 6,
      name: 'Athena Reyn Manalo Mañebo',
      role: 'Flower Girls',
      relationship: 'Twins - Family Friends',
      age: '4 years old',
      imageUrl: 'assets/image/entourage/kids/athena.jpg',
      description: '',
      favoriteThings: ['Matching Outfits', 'Singing', 'Butterflies', 'Playground'],
      funFact: 'They have their own secret twin language'
    },
    {
      id: 6,
      name: 'Sofia Beatriz Candava',
      role: 'Flower Girls',
      relationship: 'Twins - Family Friends',
      age: '4 years old',
      imageUrl: 'assets/image/entourage/kids/sophia.jpg',
      description: '',
      favoriteThings: ['Matching Outfits', 'Singing', 'Butterflies', 'Playground'],
      funFact: 'They have their own secret twin language'
    },
    {
      id: 6,
      name: 'Blythe',
      role: 'Flower Girls',
      relationship: 'Twins - Family Friends',
      age: '4 years old',
      imageUrl: 'assets/image/entourage/kids/blythe.jpg',
      description: '',
      favoriteThings: ['Matching Outfits', 'Singing', 'Butterflies', 'Playground'],
      funFact: 'They have their own secret twin language'
    },
    {
      id: 6,
      name: 'Kylie',
      role: 'Flower Girls',
      relationship: 'Twins - Family Friends',
      age: '4 years old',
      imageUrl: 'assets/image/entourage/kids/kylie.jpg',
      description: '',
      favoriteThings: ['Matching Outfits', 'Singing', 'Butterflies', 'Playground'],
      funFact: 'They have their own secret twin language'
    },
    {
      id: 6,
      name: 'Dahlia Ysabelle Lastimosa',
      role: 'Flower Girls',
      relationship: 'Twins - Family Friends',
      age: '4 years old',
      imageUrl: 'assets/image/entourage/kids/ysa.jpg',
      description: '',
      favoriteThings: ['Matching Outfits', 'Singing', 'Butterflies', 'Playground'],
      funFact: 'They have their own secret twin language'
    },
    {
      id: 6,
      name: 'Mav - Mav',
      role: 'Flower Girls',
      relationship: 'Twins - Family Friends',
      age: '4 years old',
      imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop&crop=face',
      description: '',
      favoriteThings: ['Matching Outfits', 'Singing', 'Butterflies', 'Playground'],
      funFact: 'They have their own secret twin language'
    },
    {
      id: 6,
      name: 'Amaris Jade Hatulan',
      role: 'Flower Girls',
      relationship: 'Twins - Family Friends',
      age: '4 years old',
      imageUrl: 'assets/image/entourage/kids/amaris.jpg',
      description: '',
      favoriteThings: ['Matching Outfits', 'Singing', 'Butterflies', 'Playground'],
      funFact: 'They have their own secret twin language'
    }
  ];

  roleGroups: { title: string; memberIds: number[] }[] = [
    {
      title: 'Wedding Party',
      memberIds: [1, 2] // Little Groom & Little Bride
    },
    {
      title: 'Bearer Team',
      memberIds: [3, 4, 5] // Ring, Coin, Bible Bearers
    },
    {
      title: 'Flower Team',
      memberIds: [6] // Flower Girls
    }
  ];

  selectedMember: EntourageMember | null = null;

  openMemberDetail(member: EntourageMember): void {
    this.selectedMember = member;
  }

  closeMemberDetail(): void {
    this.selectedMember = null;
  }

  getMembersByRole(roleIds: number[]): EntourageMember[] {
    return this.entourageMembers.filter(member => roleIds.includes(member.id));
  }

  getRoleIcon(role: string): string {
    const icons: { [key: string]: string } = {
      'Little Groom': '👦',
      'Little Bride': '👧',
      'Ring Bearer': '💍',
      'Coin Bearer': '🪙',
      'Bible Bearer': '📖',
      'Flower Girls': '🌸'
    };
    return icons[role] || '👶';
  }

  getRoleColor(role: string): string {
    const colors: { [key: string]: string } = {
      'Little Groom': '#1976d2',
      'Little Bride': '#e91e63',
      'Ring Bearer': '#ff9800',
      'Coin Bearer': '#4caf50',
      'Bible Bearer': '#9c27b0',
      'Flower Girls': '#f44336'
    };
    return colors[role] || '#6c757d';
  }

  getRoleDescription(role: string): string {
    const descriptions: { [key: string]: string } = {
      'Little Groom': 'stand proudly beside the groom and help keep everyone smiling',
      'Little Bride': 'accompany the bride and help with her dress and bouquet',
      'Ring Bearer': 'carry the wedding rings safely down the aisle',
      'Coin Bearer': 'present the ceremonial coins during the wedding ceremony',
      'Bible Bearer': 'carry the Bible and help with the religious ceremony items',
      'Flower Girls': 'scatter flower petals down the aisle to create a magical path'
    };
    return descriptions[role] || 'play an important role in making our day special';
  }
}
