import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface WeddingEvent {
  id: number;
  title: string;
  type: 'ceremony' | 'reception' | 'other';
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  dressCode?: string;
  note?: string;
  mapLink: string;
  featured: boolean;
  icon: string;
}

@Component({
  selector: 'app-wedding-when-where',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wedding-when-where.component.html',
  styleUrl: './wedding-when-where.component.scss'
})

export class WeddingWhenWhereComponent {
  // Event data
  weddingEvents: WeddingEvent[] = [
    {
      id: 1,
      title: 'Wedding Ceremony',
      type: 'ceremony',
      date: 'Saturday, October 25, 2025',
      time: '2:00 PM',
      venue: 'St. Benedict\'s Parish',
      address: 'Durian, Lalud, Calapan City, 5200 Oriental Mindoro',
      description: 'Join us as we exchange vows and begin our journey together as husband and wife in this beautiful historic cathedral.',
      dressCode: 'Formal Attire',
      note: 'Please arrive 30 minutes early for seating. Ceremony starts promptly at 2:00 PM.',
      mapLink: 'https://www.google.com/maps/place/St.+Benedict+Parish/@13.3966907,121.1686296,17z/data=!3m1!4b1!4m6!3m5!1s0x33bce8d3339d1545:0x98bf3e71e9fcfc12!8m2!3d13.3966855!4d121.1712099!16s%2Fg%2F11r9qp6kw?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D',
      featured: true,
      icon: 'bi-heart-fill'
    },
    {
      id: 2,
      title: 'Wedding Reception',
      type: 'reception',
      date: 'Saturday, October 25, 2025',
      time: '05:00 PM - 08:00 PM',
      venue: 'Eden Lakeview Resort',
      address: 'Sitio Centro, Baruyan, Calapan City, Oriental Mindoro',
      description: 'Celebrate with us at our elegant reception featuring dinner, dancing, and cherished moments with family and friends.',
      dressCode: 'Navy Blue with Touch of gold / white.',
      note: 'Cocktail hour begins at 5:00 PM. Dinner served at 6:30 PM. Valet parking available.',
      mapLink: 'https://www.google.com/maps/place/Eden+Lakeview+Resort/@13.3835607,121.1379723,17z/data=!3m1!4b1!4m6!3m5!1s0x33bcef0009d5ad05:0xde892a27ba626bd8!8m2!3d13.3835555!4d121.1405526!16s%2Fg%2F11mcw3tg2t?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D',
      featured: true,
      icon: 'bi-champagne'
    },
    {
      id: 5,
      title: 'Wedding After Party',
      type: 'other',
      date: 'Saturday, October 25, 2025',
      time: '08:00 PM - 11:00 PM',
      venue: 'Eden Lakeview Resort',
      address: 'Sitio Centro, Baruyan, Calapan City, Oriental Mindoro',
      description: 'A casual farewell brunch for out-of-town guests and close family to share one more meal together.',
      dressCode: 'Casual',
      note: 'All guests are welcome to join us for this casual farewell gathering.',
      mapLink: 'https://www.google.com/maps/place/Eden+Lakeview+Resort/@13.3835607,121.1379723,17z/data=!3m1!4b1!4m6!3m5!1s0x33bcef0009d5ad05:0xde892a27ba626bd8!8m2!3d13.3835555!4d121.1405526!16s%2Fg%2F11mcw3tg2t?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D',
      featured: false,
      icon: 'bi-cup-straw'
    }
  ];

  // Travel information
  travelTips = [
    {
      icon: 'bi-house-door',
      title: 'Accommodations',
      description: 'Recommend to book a hotel at Filipiniana Hotel Calapan.'
    },
    {
      icon: 'bi-car-front',
      title: 'Transportation',
      description: 'Parking available at reception.'
    },
    {
      icon: 'bi-car-front',
      title: 'Transportation',
      description: 'Transportation is available @Calapan Public Market.'
    },
    {
      icon: 'bi-cloud-sun',
      title: 'Weather',
      description: 'October in Calapan City averages 31° / 24°. Evenings can be cooler, so bring a light jacket.'
    }
  ];

  ngOnInit(): void {
    
  }

  // Get featured events
  get featuredEvents(): WeddingEvent[] {
    return this.weddingEvents.filter(event => event.featured);
  }

  // Get other events
  get otherEvents(): WeddingEvent[] {
    return this.weddingEvents.filter(event => !event.featured);
  }

  // Open map
  openMap(event: WeddingEvent): void {
    window.open(event.mapLink, '_blank');
  }

  // Add to calendar
  addToCalendar(event: WeddingEvent): void {
    const startDate = this.formatCalendarDate(event.date, event.time.split(' - ')[0]);
    const title = `${event.title} - Princess & JL's Wedding`;
    const location = `${event.venue}, ${event.address}`;
    const details = `${event.description}\n\nDress Code: ${event.dressCode}\nNote: ${event.note}`;

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${startDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarUrl, '_blank');
  }

  private formatCalendarDate(dateString: string, timeString: string): string {
    // Simple formatting - in real app, use proper date parsing
    const date = new Date(dateString + ' ' + timeString);
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  }

  // Get event icon class
  getEventIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'ceremony': 'bi-heart-fill',
      'reception': 'bi-champagne',
      'other': 'bi-calendar-event'
    };
    return icons[type] || 'bi-calendar-event';
  }
}
