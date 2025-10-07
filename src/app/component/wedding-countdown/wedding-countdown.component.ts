import { CommonModule, isPlatformServer } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  [key: string]: any;
}

interface TimeUnit {
  value: number;
  label: string;
}

interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startTime: Date;
  endTime: Date;
}

@Component({
  selector: 'app-wedding-countdown',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './wedding-countdown.component.html',
  styleUrl: './wedding-countdown.component.scss'
})

export class WeddingCountdownComponent implements OnInit, OnDestroy {
  weddingDate: Date = new Date('2025-10-25T14:00:00');
  currentDate: Date = new Date();
  timeUnits: TimeUnit[] = [
    { value: 0, label: 'Days' },
    { value: 0, label: 'Hours' },
    { value: 0, label: 'Minutes' },
    { value: 0, label: 'Seconds' }
  ];

  progressPercentage: number = 0;
  daysUntil: number = 0;
  showCalendarDropdown: boolean = false;

  private countdownInterval: any;
  private engagementStart: Date = new Date('2023-03-23');
  isServer: boolean;

  // Wedding event details for calendar
  private weddingEvent: CalendarEvent = {
    title: 'Princess & JL Wedding',
    description: 'Join us for the wedding celebration of Princess & JL. Your presence is the greatest gift we could ask for.',
    location: 'St. Benedict Parish Church, Durian, Lalud, Calapan City, 5200 Oriental Mindoro',
    startTime: new Date('2025-10-25T14:00:00'),
    endTime: new Date('2025-10-25T24:00:00')
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isServer = isPlatformServer(this.platformId);
  }

  isToday(): boolean {
    return (
      this.currentDate.getFullYear() === this.weddingDate.getFullYear() &&
      this.currentDate.getMonth() === this.weddingDate.getMonth() &&
      this.currentDate.getDate() === this.weddingDate.getDate()
    );
  }


  ngOnInit(): void {
    if (!this.isServer) {
      this.startCountdown();
    }
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  startCountdown(): void {
    this.updateCountdown();
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  private updateCountdown(): void {
    const now = new Date();
    const timeDifference = this.weddingDate.getTime() - now.getTime();

    if (timeDifference > 0) {
      this.daysUntil = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.updateTimeUnit(0, this.daysUntil);
      this.updateTimeUnit(1, hours);
      this.updateTimeUnit(2, minutes);
      this.updateTimeUnit(3, seconds);

      this.updateProgress();
    } else {
      // Wedding day has arrived!
      this.timeUnits = [
        { value: 0, label: 'Days' },
        { value: 0, label: 'Hours' },
        { value: 0, label: 'Minutes' },
        { value: 0, label: 'Seconds' }
      ];
      this.progressPercentage = 100;
    }
  }

  private updateTimeUnit(index: number, newValue: number): void {
    if (this.timeUnits[index].value !== newValue) {
      this.timeUnits[index].value = newValue;
    }
  }

  private updateProgress(): void {
    const totalEngagement = this.weddingDate.getTime() - this.engagementStart.getTime();
    const timePassed = Date.now() - this.engagementStart.getTime();

    if (totalEngagement > 0) {
      this.progressPercentage = Math.min(100, Math.max(0, (timePassed / totalEngagement) * 100));
    }
  }

  // Calendar Methods
  toggleCalendarDropdown(): void {
    this.showCalendarDropdown = !this.showCalendarDropdown;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.calendar-buttons')) {
      this.showCalendarDropdown = false;
    }
  }

  addToGoogleCalendar(): void {
    const startTime = this.formatDateForGoogle(this.weddingEvent.startTime);
    const endTime = this.formatDateForGoogle(this.weddingEvent.endTime);

    const url = new URL('https://calendar.google.com/calendar/render');
    url.searchParams.set('action', 'TEMPLATE');
    url.searchParams.set('text', this.weddingEvent.title);
    url.searchParams.set('details', this.weddingEvent.description);
    url.searchParams.set('location', this.weddingEvent.location);
    url.searchParams.set('dates', `${startTime}/${endTime}`);

    window.open(url.toString(), '_blank');
    this.showCalendarDropdown = false;
  }

  addToAppleCalendar(): void {
    // For Apple Calendar, we'll download an ICS file which automatically opens in Calendar on macOS/iOS
    this.downloadICS();
    this.showCalendarDropdown = false;
  }

  addToOutlook(): void {
    const startTime = this.formatDateForOutlook(this.weddingEvent.startTime);
    const endTime = this.formatDateForOutlook(this.weddingEvent.endTime);

    const url = new URL('https://outlook.live.com/calendar/0/deeplink/compose');
    url.searchParams.set('subject', this.weddingEvent.title);
    url.searchParams.set('body', this.weddingEvent.description);
    url.searchParams.set('location', this.weddingEvent.location);
    url.searchParams.set('startdt', startTime);
    url.searchParams.set('enddt', endTime);

    window.open(url.toString(), '_blank');
    this.showCalendarDropdown = false;
  }

  downloadICS(): void {
    const icsContent = this.generateICSContent();
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sarah-Michael-Wedding.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    this.showCalendarDropdown = false;
  }

  private generateICSContent(): string {
    const formatDate = (date: Date): string => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };

    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding//Countdown//EN',
      'BEGIN:VEVENT',
      `UID:${btoa(this.weddingEvent.title + this.weddingEvent.startTime.getTime())}`,
      `DTSTAMP:${formatDate(new Date())}`,
      `DTSTART:${formatDate(this.weddingEvent.startTime)}`,
      `DTEND:${formatDate(this.weddingEvent.endTime)}`,
      `SUMMARY:${this.weddingEvent.title}`,
      `DESCRIPTION:${this.weddingEvent.description.replace(/\n/g, '\\n')}`,
      `LOCATION:${this.weddingEvent.location}`,
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');
  }

  private formatDateForGoogle(date: Date): string {
    return date.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15) + 'Z';
  }

  private formatDateForOutlook(date: Date): string {
    return date.toISOString();
  }

  // Helper methods
  getFormattedTimeUntil(): string {
    if (this.daysUntil > 30) {
      const months = Math.floor(this.daysUntil / 30);
      const days = this.daysUntil % 30;
      return `${months} month${months !== 1 ? 's' : ''} and ${days} day${days !== 1 ? 's' : ''}`;
    } else if (this.daysUntil > 0) {
      return `${this.daysUntil} day${this.daysUntil !== 1 ? 's' : ''}`;
    } else {
      return 'Today!';
    }
  }

  // Method to update wedding event details
  setWeddingEventDetails(event: Partial<CalendarEvent>): void {
    this.weddingEvent = { ...this.weddingEvent, ...event };
  }
}
