import { CommonModule, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  [key: string]: any;
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

export class WeddingCountdownComponent {
  weddingDate: Date = new Date('2025-10-25T14:00:00');
  timeRemaining: TimeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  private countdownInterval: any;
  isServer: boolean;

  /**
   *
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isServer = isPlatformServer(this.platformId);
  }

  countdownMessages = [
    { days: 365, message: "A whole year of anticipation!" },
    { days: 180, message: "Six months to go - the excitement builds!" },
    { days: 90, message: "Just three months away!" },
    { days: 30, message: "One month until our special day!" },
    { days: 14, message: "Two weeks to go - final preparations!" },
    { days: 7, message: "One week countdown begins!" },
    { days: 3, message: "Almost there - just a few days left!" },
    { days: 1, message: "Tomorrow is the big day!" },
    { days: 0, message: "Today's the day! 🎉" }
  ];

  currentMessage: string = "Counting down to our forever...";

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

  updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.weddingDate.getTime() - now;

    if (distance < 0) {
      this.timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      this.currentMessage = "We're married! Thank you for celebrating with us! 💕";
      clearInterval(this.countdownInterval);
      return;
    }

    this.timeRemaining = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };

    this.updateMessage();
  }

  updateMessage(): void {
    const days = this.timeRemaining.days;

    for (const message of this.countdownMessages) {
      if (days >= message.days) {
        this.currentMessage = message.message;
        break;
      }
    }
  }

  getWeddingDateFormatted(): string {
    return this.weddingDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getWeddingTimeFormatted(): string {
    return this.weddingDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  getProgressPercentage(): number {
    const totalEngagement = 730; // Approx 2 years in days
    const daysPassed = totalEngagement - this.timeRemaining.days;
    return Math.min(Math.max((daysPassed / totalEngagement) * 100, 0), 100);
  }

  addToCalendar(): void {
    const startDate = this.weddingDate.toISOString().replace(/-|:|\.\d+/g, '');
    const endDate = new Date(this.weddingDate.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Celebration&dates=${startDate}/${endDate}&details=Join%20us%20for%20our%20wedding%20celebration!&location=Wedding%20Venue`;

    window.open(calendarUrl, '_blank');
  }

  setReminder(): void {
    alert('Reminder set! We\'ll notify you as the big day approaches!');
  }

  get countdownClass(): string {
    if (this.timeRemaining.days === 0) {
      return 'final-countdown';
    } else if (this.timeRemaining.days <= 7) {
      return 'one-week-countdown';
    } else if (this.timeRemaining.days <= 30) {
      return 'one-month-countdown';
    }
    return '';
  }
}
