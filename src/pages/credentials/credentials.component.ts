import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';

type Tab = 'certifications' | 'skills' | 'badges';

interface Skill {
  name: string;
  iconUrl?: string;
}

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CredentialsComponent {
  activeTab = signal<Tab>('certifications');
  flippedBadge = signal<string | null>(null);

  certifications = [
    { name: 'Machine Learning Specialization', issuer: 'Stanford online', date: 'June 2025', description: 'Learned the fundamentals of machine learning, including linear regression, logistic regression, neural networks, and their applications.', verificationLink: '#' },
    { name: 'Data Science Professional Working Certificate', issuer: 'IBM', date: 'June 2025', description: 'Gained hands-on experience with data science tools like Python, SQL, and Jupyter, and completed several projects.', verificationLink: '#' },
    { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC2', date: 'Aug 2024', description: 'Validated knowledge across key cybersecurity domains, including security principles, business continuity, and network security.', verificationLink: '#' },
  ];

  badges = [
    { name: 'ISC2 Certified in Cybersecurity', imageUrl: 'https://picsum.photos/seed/isc2badge/200/200', link: '#', description: 'This badge certifies foundational knowledge in cybersecurity principles and practices.' },
    { name: 'IBM Data Science', imageUrl: 'https://picsum.photos/seed/ibmbadge/200/200', link: '#', description: 'Awarded for demonstrating proficiency in data science methodologies and tools through hands-on labs.' },
    { name: 'Stanford Machine Learning', imageUrl: 'https://picsum.photos/seed/stanfordbadge/200/200', link: '#', description: 'Represents a deep understanding of machine learning algorithms and their practical implementation.' },
  ];
  
  private allSkills: Skill[] = [
    // Programming & Markup
    { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'SQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    { name: 'Assembly X86', iconUrl: `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23E5E7EB' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='12' cy='12' r='3'%3e%3c/circle%3e%3cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'%3e%3c/path%3e%3c/svg%3e` },
    
    // Frameworks & Libraries
    { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
    { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'TensorFlow', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
    { name: 'NumPy', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
    { name: 'Matplotlib', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
    { name: 'JUnit', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain.svg' },
    { name: 'Scikit-learn', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },

    // Databases & Cloud
    { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    { name: 'Firestore', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    { name: 'SQLite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },

    // Tools & Platforms
    { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Jira', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
    { name: 'Jupyter', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
    { name: 'Postman', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name: 'VB.net', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg' },
    { name: 'Embedded Systems', iconUrl: `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23E5E7EB' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='12' cy='12' r='3'%3e%3c/circle%3e%3cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'%3e%3c/path%3e%3c/svg%3e` },
    { name: 'Photoshop', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg' },
    { name: 'Premiere Pro', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg' },
    { name: 'Canva', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
    
    // Skills without dedicated icons
    { name: 'Maze' },
    { name: 'CapCut' },
    { name: 'Neon DB' },
    { name: 'Beautiful Soup' },
    { name: 'PiCamera' },
    { name: 'Pillow' },
    { name: 'CUPS' },
  ];

  skillsWithIcons = computed(() => this.allSkills.filter(s => s.iconUrl));
  skillsWithoutIcons = computed(() => this.allSkills.filter(s => !s.iconUrl));

  changeTab(tab: Tab) {
    this.activeTab.set(tab);
    this.flippedBadge.set(null); // Reset flip on tab change
  }

  toggleFlip(badgeName: string) {
    this.flippedBadge.update(current => current === badgeName ? null : badgeName);
  }
}