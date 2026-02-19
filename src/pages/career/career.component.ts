import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
}

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerComponent {
  experiences: Experience[] = [
    {
      role: 'Head of Public Outreach',
      organization: 'Google Developers Student Club',
      period: 'Sep 2023 - Present',
      description: 'Networking in the industry, contacting and extending invitations to corporations and individuals on behalf of Google Developers Student Club Fast-NUCES Lahore. Hosted 17 guest seminars.'
    },
    {
      role: 'Head of Partnerships',
      organization: 'NUCES Fintech Society',
      period: 'Sep 2025 - Present', // As per CV
      description: 'Extending invitations for Fintech guest seminars in university. Arranging industry tours for university students.'
    },
    {
      role: 'Ambassador',
      organization: 'LUMS Sports Fest by Lums Sports Society (LSS)',
      period: 'Dec 2024 - Jan 2025', // As per CV
      description: 'Increased LUMS Sports Fest reach and awareness threefold in FAST-NUCES Lahore. Facilitated delegate registration and accommodation.'
    }
  ];

  education: Education[] = [
    {
      degree: 'B.S.S.E - Software Engineering',
      institution: 'FAST-NUCES Lahore',
      period: 'Aug 2023 - May 2027'
    },
    {
      degree: 'GCE Advanced Level – Computer Science, Physics and Mathematics',
      institution: 'International School Lahore',
      period: 'Aug 2021 - May 2023'
    },
    {
      degree: 'GCE Ordinary Level - Computer Sciences',
      institution: 'Bahria Town School & Colleger',
      period: 'Aug 2019 - May 2021'
    }
  ];
}
