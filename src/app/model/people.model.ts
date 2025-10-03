export class People {
  image?: string;
  name: string;
  details: string;
  facebook: string;
  twitterX: string;
  google: string;
  linkedin: string;

  constructor(name: string, details: string,
    facebook: string, twitterX: string,
    linkedin: string, google: string) {
      this.name = name;
      this.details = details;
      this.facebook = facebook;
      this.twitterX = twitterX;
      this.google = google;
      this.linkedin = linkedin
  }
}