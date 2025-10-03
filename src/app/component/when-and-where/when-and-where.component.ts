import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


export interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  location: string;
  address: string;
  exactAddress: string;
  description: string;
  icon: string;
  dressCode?: string;
  note?: string;
}

@Component({
  selector: 'app-when-and-where',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './when-and-where.component.html',
  styleUrl: './when-and-where.component.scss'
})

export class WhenAndWhereComponent {
  sectionTitle = 'WHEN & WHERE';
  sectionSubtitle = 'Save Our Special Dates';

  events: Event[] = [
    {
      id: 1,
      title: 'Holy Matrimony',
      date: new Date('2025-10-25'),
      time: '2:00 PM',
      location: 'St. Benedict Parish',
      address: 'Durian, Lalud, Calapan City, 5200 Oriental Mindoro',
      exactAddress: 'St.+Benedict+Parish/@13.3966907,121.1663443,17z/data=!3m1!4b1!4m6!3m5!1s0x33bce8d3339d1545:0x98bf3e71e9fcfc12!8m2!3d13.3966855!4d121.1712099!16s%2Fg%2F11r9qp6kw?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D',
      description: 'Join us as we exchange vows and begin our journey together in holy matrimony. The ceremony will be a traditional Catholic mass filled with love, blessings, and sacred promises.',
      icon: '💒',
      dressCode: 'Semi-Formal Attire',
      note: 'Please arrive 30 minutes before the ceremony'
    },
    {
      id: 2,
      title: 'Wedding Reception',
      date: new Date('2025-10-25'),
      time: '5:30 PM',
      location: 'Eden Lakeview Resort',
      address: 'Sitio Centro, Baruyan, Calapan City, Oriental Mindoro',
      exactAddress: 'Eden+Lakeview+Resort/@13.3835607,121.1379723,17z/data=!3m1!4b1!4m6!3m5!1s0x33bcef0009d5ad05:0xde892a27ba626bd8!8m2!3d13.3835555!4d121.1405526!16s%2Fg%2F11mcw3tg2t?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D',
      description: 'Celebrate with us over dinner, drinks, and dancing. The reception will feature heartfelt toasts, delicious cuisine, and an evening of joyful celebration with our closest family and friends.',
      icon: '🎉',
      dressCode: 'Semi-Formal Attire',
      note: 'Cocktail hour begins at 5:30 PM'
    },
    {
      id: 3,
      title: 'Rehearsal Dinner',
      date: new Date('2025-10-25'),
      time: '7:00 PM',
      location: 'Eden Lakeview Resort',
      address: 'Sitio Centro, Baruyan, Calapan City, Oriental Mindoro',
      exactAddress: 'Eden+Lakeview+Resort/@13.3835607,121.1379723,17z/data=!3m1!4b1!4m6!3m5!1s0x33bcef0009d5ad05:0xde892a27ba626bd8!8m2!3d13.3835555!4d121.1405526!16s%2Fg%2F11mcw3tg2t?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D',
      description: 'An intimate gathering for our wedding party and immediate family to relax and enjoy each other\'s company before the big day.',
      icon: '🍽️',
      dressCode: 'Smart Casual'
    }
  ];

  selectedEvent: Event | null = null;
  currentDate: Date = new Date();

  openEventDetail(event: Event): void {
    this.selectedEvent = event;
  }

  closeEventDetail(): void {
    this.selectedEvent = null;
  }

  getFormattedDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getTimeUntilEvent(eventDate: Date): string {
    const now = new Date();
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays > 1) return `In ${diffDays} days`;
    if (diffDays < 0) return 'Passed';

    return 'Soon';
  }

  addToCalendar(event: Event): void {
    // Google Calendar link
    const startDate = event.date.toISOString().replace(/-|:|\.\d+/g, '');
    const endDate = new Date(event.date.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.address)}`;

    window.open(calendarUrl, '_blank');
  }

  openMap(exactAddress: string): void {
    const mapUrl = `https://www.google.com/maps/place/${exactAddress}`;
    window.open(mapUrl, '_blank');
  }
}
