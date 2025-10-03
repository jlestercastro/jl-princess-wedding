import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Person {
  id: number;
  name: string;
  nickname?: string;
  role: string;
  imageUrl: string;
  description: string;
  qualities: string[];
  story: string;
  favoriteThings: {
    icon: string;
    item: string;
  }[];
}

@Component({
  selector: 'app-couple-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './couple-profile.component.html',
  styleUrl: './couple-profile.component.scss'
})
export class CoupleProfileComponent {
  sectionTitle = 'MEET THE COUPLE';
  sectionSubtitle = 'Two Hearts, One Love Story';

  couple = {
    names: 'May Princes & Jun Lester',
    weddingDate: 'October 25, 2025',
  };

  bride: Person = {
    id: 1,
    name: 'May Princess Rago Manalo',
    nickname: 'Princess / Cessa',
    role: 'Bride',
    imageUrl: 'assets/image/couple/Enhanced_257_2.jpg',
    description: 'Creative soul with a passion for architecture and photography. Loves turning ordinary moments into extraordinary memories.',
    qualities: ['Creative', 'Compassionate', 'Detail-Oriented'],
    story: 'Princess finds beauty in everything around her. From designing spaces to capturing moments through her lens, she brings creativity and warmth to every aspect of life.',
    favoriteThings: [
      { icon: '📚', item: 'Architecture Books' },
      { icon: '🏃🏼‍♂️', item: 'Running' },
      { icon: '👩🏼‍🍳', item: 'Cooking' },
      { icon: '🌿', item: 'Indoor Plants' }
    ]
  };

  groom: Person = {
    id: 2,
    name: 'Jun Lester Lastimosa Castro',
    nickname: 'JL',
    role: 'Groom',
    imageUrl: 'assets/image/couple/Enhanced_257_1.jpg',
    description: 'Tech enthusiast with a love for innovation and adventure. Believes in building solutions that make life better.',
    qualities: ['Analytical', 'Supportive', 'Curious', 'Reliable'],
    story: 'JL approaches life with curiosity and determination. Whether coding new applications or exploring hiking trails, he finds joy in solving puzzles and creating connections.',
    favoriteThings: [
      { icon: '💻', item: 'Coding Projects' },
      { icon: '🏃🏼‍♂️', item: 'Running' },
      { icon: '⛹🏼‍♂️', item: 'Playing Basketball' },
      { icon: '👨🏼‍🍳', item: 'Cooking' },
    ]
  };

  selectedPerson: Person | null = null;
  activeTimelineIndex = 0;

  openPersonDetail(person: Person): void {
    this.selectedPerson = person;
  }

  closePersonDetail(): void {
    this.selectedPerson = null;
  }

  get sharedQualities(): string[] {
    return ['Adventurous', 'Family-Oriented', 'Coffee Lovers', 'Travel Enthusiasts'];
  }
}
