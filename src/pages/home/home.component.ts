import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Achievement {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  achievements: Achievement[] = [
    {
      title: 'F1 Experience Project',
      description: 'A full-stack web app predicting F1 race winners with 82% accuracy using a continuously learning model.',
      imageUrl: 'https://picsum.photos/seed/f1/800/600'
    },
    {
      title: 'Explore Pakistan App',
      description: 'Facilitated travel planning, boosting tourism and increasing local income by up to 10%.',
      imageUrl: 'https://picsum.photos/seed/pakistan/800/600'
    },
    {
      title: 'Certified in Cybersecurity',
      description: 'Achieved the (CC) certification from ISC2, validating foundational cybersecurity knowledge.',
      imageUrl: 'https://picsum.photos/seed/cyber/800/600'
    }
  ];

  currentIndex = signal(0);

  next() {
    this.currentIndex.update(i => (i + 1) % this.achievements.length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.achievements.length) % this.achievements.length);
  }
}
