import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Project {
  title: string;
  description: string;
  link?: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'F1 Experience',
      description: 'A full stack java web app that displays real-time F1 data, Predicts the winner of upcoming races and the championship with 82 percent accuracy. Continuously learns and improves the model.',
      link: '#',
      imageUrl: 'https://picsum.photos/seed/formula1/800/600',
    },
    {
      title: 'Explore Pakistan',
      description: 'A java web app to facilitate travel planning. Allowed people to plan solo and group trips in Pakistan, boosting the underrepresented tourist destinations and increasing local income by as much as 10 percent.',
      link: '#',
      imageUrl: 'https://picsum.photos/seed/travel/800/600',
    },
    {
      title: 'Electricity Consumption Planner',
      description: 'A desktop application that allows individuals to create optimum schedules to run appliances minimizing peak hour usage and decreasing the total electricity bill by as much as 35 percent.',
      link: '#',
      imageUrl: 'https://picsum.photos/seed/electricity/800/600',
    }
  ];
}
