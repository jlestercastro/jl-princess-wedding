import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-entourage',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './entourage.component.html',
  styleUrl: './entourage.component.scss'
})

export class EntourageComponent {
  sectionTitle = 'WEDDING ENTourage';
  sectionSubtitle = 'Meet the Special People Sharing Our Day';

  entouragePath = 'assets/image/entourage'
  groomsmen: EntourageMember[] = [
    {
      id: 1,
      name: 'Marvie Deil Cepillo',
      role: 'Best Man',
      relationship: 'College Friend',
      imageUrl: `${this.entouragePath}/groomsmen/marvie.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 2,
      name: 'John Paul Manalo',
      role: 'Candle',
      relationship: 'Bride\'s Brother',
      imageUrl: `${this.entouragePath}/groomsmen/paul.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 3,
      name: 'Ian Kaisser Ballesteros',
      role: 'Veil',
      relationship: 'Groom\'s Cousin',
      imageUrl: `${this.entouragePath}/groomsmen/ian.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 4,
      name: 'John Albert Barcelona',
      role: 'Cord',
      relationship: 'College Friend',
      imageUrl: `${this.entouragePath}/groomsmen/albert.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 5,
      name: 'John Rovick Manalo',
      role: 'Candle',
      relationship: 'Bride\'s Brother',
      imageUrl: `${this.entouragePath}/groomsmen/rovick.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 6,
      name: 'Rondel L. Delfino',
      role: 'Veil',
      relationship: 'Groom\'s Cousin',
      imageUrl: `${this.entouragePath}/groomsmen/rondel.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 7,
      name: 'Jerome L. Castro',
      role: 'Cord',
      relationship: 'Groom\'s Brother',
      imageUrl: `${this.entouragePath}/groomsmen/jerome.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 8,
      name: 'Juztin Carl L. Castro',
      role: 'Groomsmen',
      relationship: 'Groom\'s Brother',
      imageUrl: `${this.entouragePath}/groomsmen/jc.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 9,
      name: 'John Mark Manalo',
      role: 'Groomsmen',
      relationship: 'Bride\'s Brother',
      imageUrl: `${this.entouragePath}/groomsmen/johnmark.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 9,
      name: 'Jesilito M. Benter',
      role: 'Groomsmen',
      relationship: 'College Friend',
      imageUrl: `${this.entouragePath}/groomsmen/jesi.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 10,
      name: 'Keneth A. Liwanag',
      role: 'Groomsmen',
      relationship: 'College Friend',
      imageUrl: `${this.entouragePath}/groomsmen/keneth.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 11,
      name: 'Maaño Francis Manalo',
      role: 'Groomsmen',
      relationship: 'Bride\'s Cousin',
      imageUrl: `${this.entouragePath}/groomsmen/francis.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
  ]

  matronOfHonor: EntourageMember = {
    id: 1,
    name: 'Elizabeth Hatulan',
    role: 'Matron of Honor',
      relationship: 'Bride\'s Sister',
    imageUrl: `${this.entouragePath}/bridesmaid/beth.jpg`,
    description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
  }

  bridesmaid: EntourageMember[] = [
    {
      id: 1,
      name: 'Burney Plata',
      role: 'Maid of Honor',
      relationship: 'College Friend',
      imageUrl: `${this.entouragePath}/bridesmaid/burney.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 2,
      name: 'Jenny Rose Alillo',
      role: 'Candle',
      relationship: 'Friend',
      imageUrl: `${this.entouragePath}/bridesmaid/jen.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 3,
      name: 'Khizcia Naomi Nieto',
      role: 'Veil',
      relationship: 'Groom\'s Niece',
      imageUrl: `${this.entouragePath}/bridesmaid/khizcia.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 4,
      name: 'Paulline Lastimosa Tee',
      role: 'Cord',
      relationship: 'Groom\'s Cousin',
      imageUrl: `${this.entouragePath}/bridesmaid/pau.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 5,
      name: 'Eloisa Tee',
      role: 'Cord',
      relationship: 'Groom\'s Cousin',
      imageUrl: `${this.entouragePath}/bridesmaid/eloisa.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 6,
      name: 'Alexa',
      role: 'Candle',
      relationship: 'Groom\'s Cousin',
      imageUrl: `${this.entouragePath}/bridesmaid/joy.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 7,
      name: 'Josephine Manalo',
      role: 'Veil',
      relationship: 'Bride\'s Cousin',
      imageUrl: `${this.entouragePath}/bridesmaid/joy.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 8,
      name: 'Bianca Grace L. Rayos',
      role: 'Cord',
      relationship: 'Groom\'s Cousin',
      imageUrl: `${this.entouragePath}/bridesmaid/bianca.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 9,
      name: 'Fatima Olla',
      role: 'Bridesmaid',
      relationship: 'Brides\'s Cousin',
      imageUrl: `${this.entouragePath}/bridesmaid/fatima.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 10,
      name: 'Elee Nathesa Narsoles',
      role: 'Bridesmaid',
      relationship: 'College Friend',
      imageUrl: `${this.entouragePath}/bridesmaid/elee.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 10,
      name: 'Apple Katherine S. Lopez',
      role: 'Bridesmaid',
      relationship: 'College Friend',
      imageUrl: `${this.entouragePath}/bridesmaid/apple.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
    {
      id: 11,
      name: 'Sharmaine D. Liwanag',
      role: 'Bridesmaid',
      relationship: 'Friend',
      imageUrl: `${this.entouragePath}/bridesmaid/sharmaine.jpg`,
      description: 'My reliable brother and lifelong companion who always knows how to make me laugh.'
    },
  ]

  selectedMember: EntourageMember | null = null;

  openMemberDetail(member: EntourageMember): void {
    this.selectedMember = member;
  }

  closeMemberDetail(): void {
    this.selectedMember = null;
  }
}

export interface EntourageMember {
  id: number;
  name: string;
  role: string;
  relationship: string;
  imageUrl: string;
  description: string;
}