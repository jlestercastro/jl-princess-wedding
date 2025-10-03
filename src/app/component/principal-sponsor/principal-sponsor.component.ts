import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-sponsor',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './principal-sponsor.component.html',
  styleUrl: './principal-sponsor.component.scss'
})
export class PrincipalSponsorComponent {
sectionTitle = 'PRINCIPAL SPONSORS';
  sectionSubtitle = 'With Heartfelt Gratitude to Our Beloved Guides';

  sponsors: Sponsor[] = [
    {
      id: 1,
      name: 'Mr. & Mrs. Felixberto and Eden Hatulan',
      category: 'Ninong and Ninang',
      relationship: 'Bride\'s Godparents',
      specialNote: 'Guided us with wisdom and unwavering support'
    },
    {
      id: 2,
      name: 'Mr. & Mrs. Nathan And Jess Narsoles',
      category: 'Ninong and Ninang',
      relationship: 'Groom\'s & Bride\'s Mentors',
      specialNote: 'Inspired us with their lifelong partnership'
    },
    {
      id: 3,
      name: 'Mr. & Mrs. Ramil and Noida Castro',
      category: 'Ninong and Ninang',
      relationship: 'Groom\'s Uncle & Auntie',
      specialNote: 'Shared invaluable lessons on love and commitment'
    },
    {
      id: 4,
      name: 'Mr. & Mrs. Reynante and Sally Yabut',
      category: 'Ninong and Ninang',
      relationship: 'Groom\'s Godparent',
      specialNote: 'Believed in us from the very beginning'
    },
    {
      id: 5,
      name: 'Mr. & Mrs. Rodel and Cristy Delfino',
      category: 'Ninong and Ninang',
      relationship: 'Groom\'s Uncle and Auntie',
      specialNote: 'Always there with open hearts and homes'
    },
    {
      id: 6,
      name: 'Mr. & Mrs. Fundador and Carmela Chua',
      category: 'Ninong and Ninang',
      relationship: 'Neighborhood Guardian',
      specialNote: 'Showed us the beauty of balancing career and family'
    },
    {
      id: 7,
      name: 'Mr. & Mrs. Tomy and Sonia Manalo',
      category: 'Ninong and Ninang',
      relationship: 'Bride\'s Uncle and Auntie',
      specialNote: 'Adventured with us and shared life\'s journeys'
    },
    {
      id: 8,
      name: 'Mr. & Mrs. Lito and Malou Rabino',
      category: 'Ninong and Ninang',
      relationship: 'Bride\'s Godparent',
      specialNote: 'Nurtured our faith and relationship with God'
    },
    {
      id: 9,
      name: 'Mr. & Mrs. Arnel and Mona Gaud',
      category: 'Ninong and Ninang',
      relationship: 'Bride\'s Godparent',
      specialNote: 'Taught us the recipe for a happy home'
    },
    {
      id: 10,
      name: 'Mr. & Mrs. Geneis and Kath Castro',
      category: 'Ninong and Ninang',
      relationship: 'Groom\'s Godparent',
      specialNote: 'Showed us how to paint life with love\'s colors'
    },
    {
      id: 11,
      name: 'Mr. & Mrs. Ian and Riza Jonas',
      category: 'Ninong and Ninang',
      relationship: 'Groom\'s Godparent',
      specialNote: 'Harmonized our lives with beautiful melodies'
    },
    {
      id: 12,
      name: 'Mr. & Mrs. Bans and Emy Castro',
      category: 'Ninong and Ninang',
      relationship: 'Nature Guides',
      specialNote: 'Rooted us in what truly matters in life'
    },
    {
      id: 13,
      name: 'Engr. & Mrs. Michael Pedrasa and Mariphe Goco',
      category: 'Ninong',
      relationship: 'Groom\'s and Bride\'s Mentor',
      specialNote: 'Rooted us in what truly matters in life'
    },
    {
      id: 14,
      name: 'Engr. Sayre Collado',
      category: 'Ninong',
      relationship: 'Groom\'s Mentor',
      specialNote: 'Showed us how to paint life with love\'s colors'
    },
    {
      id: 6,
      name: 'Mr. Antonio Rago',
      category: 'Ninong',
      relationship: 'Bride\'s Uncle',
      specialNote: 'Believed in us from the very beginning'
    },
  ];

  selectedSponsor: Sponsor | null = null;

  openSponsorDetail(sponsor: Sponsor): void {
    this.selectedSponsor = sponsor;
  }

  closeSponsorDetail(): void {
    this.selectedSponsor = null;
  }

  // Group sponsors by category for organized display
  get sponsorsByCategory() {
    const categories = this.sponsors.reduce((acc, sponsor) => {
      if (!acc[sponsor.category]) {
        acc[sponsor.category] = [];
      }
      acc[sponsor.category].push(sponsor);
      return acc;
    }, {} as { [key: string]: Sponsor[] });

    return Object.entries(categories);
  }
}

export interface Sponsor {
  id: number;
  name: string;
  category: string;
  relationship: string;
  specialNote?: string;
}