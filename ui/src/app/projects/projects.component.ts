import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, Github, ExternalLink } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  imports: [CommonModule, LucideAngularModule]
})
export class ProjectsComponent {
  @Input() isProjectsPage: boolean = true

  projects = [
    {
      name: 'Tour Booking App',
      image: 'assets/images/project-screenshots/Screenshot 2025-07-19 214632.png',
      stack: 'Laravel + Nuxt.js + GCP',
      year: 2024,
      madeAt: null,
      description: 'Full-featured tour booking platform with social login (Google, Facebook), responsive UI, and deployment on Google Cloud. Supports booking management and user dashboards.',
      details: [
        'Developed backend APIs in Laravel for managing tours, bookings, and payments.',
        'Built a responsive Nuxt.js frontend with SSR for optimal SEO and performance.',
        'Integrated social login (Google & Facebook) using OAuth 2.0.',
        'Deployed on Google Cloud with automatic SSL and CDN.',
        'Enabled travel agents to manage bookings and clients efficiently.'
      ],
      github: 'https://github.com/felixkpt/tour-booking-nuxt',
      live: 'https://travelmate.felixkpt.com',
      skills: [
        'Laravel', 'Nuxt.js', 'GCP', 'OAuth 2.0',
        'Vue.js', 'MySQL', 'Docker', 'JWT'
      ]
    },
    {
      name: 'JobMaster AI',
      image: 'assets/images/project-screenshots/Screenshot 2025-07-16 134506.png',
      year: 2025,
      madeAt: null,
      stack: 'Angular + .NET + OpenAI',
      description: 'AI-powered job application assistant with resume analysis, job matching, and GPT-based cover letter generation. Exports DOCX, integrates JWT auth, and runs on Azure.',
      details: [
        'Built Angular 17 frontend with modern UI components and JWT authentication.',
        'Integrated OpenAI API to generate cover letters and analyze resume keywords.',
        'Developed RESTful APIs in .NET 9 with Swagger documentation.',
        'Exported user-generated content to DOCX for download.',
        'Deployed the platform on Azure with CI/CD pipelines for staging and production.'
      ],
      github: 'https://github.com/felixkpt/JobMasterApi',
      live: 'https://jobmasterai.felixkpt.com',
      skills: [
        'Angular', '.NET 9', 'OpenAI API', 'Azure',
        'JWT', 'Swagger', 'AI', 'DOCX Export', 'REST API'
      ]
    },
    {
      name: 'Employee Tracking System',
      image: 'assets/images/project-screenshots/Screenshot 2025-07-16 132925.png',
      year: 2025,
      madeAt: 'Griffin Global Technologies',
      stack: 'Node.js + PostgreSQL + React + AWS',
      description: 'Field staff tracking platform with real-time dashboards, RESTful APIs, and AWS deployment. Cut monitoring time by 40%. Uses Docker and CloudFront for performance.',
      details: [
        'Designed and developed a robust employee tracking system enabling managers to assign, monitor, and evaluate field staff in real-time.',
        'Implemented RESTful APIs in Node.js with PostgreSQL for secure, scalable data handling.',
        'Built a responsive UI in React for HR and team leads to view performance dashboards, tasks, and attendance.',
        'Integrated AWS services:',
        '– S3 for document storage (CVs, reports),',
        '– CloudFront for fast and secure delivery of assets (UI),',
        '– EC2 for API hosting.',
        'Containerized the app with Docker and used Nginx for reverse proxy/load balancing.',
        'Reduced employee monitoring and reporting time by over 40%.'
      ],
      github: 'https://github.com/felixkpt/employee-tracking-system',
      live: 'https://employee-tracking-system.felixkpt.com',
      skills: [
        'Node.js', 'React', 'PostgreSQL', 'AWS S3',
        'AWS EC2', 'CloudFront', 'Docker', 'REST API'
      ]
    },
    {
      name: 'MERN E-Commerce App',
      image: 'assets/images/project-screenshots/Screenshot 2025-07-17 195541.png',
      year: 2022,
      madeAt: null,
      stack: 'MongoDB + Express + React + Node',
      description: 'E-commerce application with user authentication, PayPal payment integration, product listings, and Redux for global state management.',
      details: [
        'Designed product catalog, shopping cart, and order workflow using MERN stack.',
        'Implemented secure authentication using JWT and role-based access.',
        'Integrated PayPal API for real-time payment processing.',
        'Managed global state using Redux for cart and order management.',
        'Optimized MongoDB queries for fast product search and listing.'
      ],
      github: 'https://github.com/felixkpt/e-commerce-react-fe',
      live: 'https://shophive.felixkpt.com',
      skills: [
        'MongoDB', 'Express.js', 'React', 'Node.js',
        'Redux', 'JWT', 'PayPal API', 'REST API'
      ]
    },
    {
      name: 'MatchOracle',
      image: 'assets/images/project-screenshots/Screenshot 2025-07-21 035820.png',
      year: 2023,
      madeAt: null,
      stack: 'Laravel + Python + ML + MySQL + React',
      description: 'Sports analytics platform using microservices and machine learning models. Features include real-time predictions, CI/CD pipelines, and automated deployments.',
      details: [
        'Built microservices in Laravel and Python for ingesting and analyzing live sports data.',
        'Implemented ML models to generate win/loss predictions with 85% accuracy.',
        'Used Docker and GitHub Actions to create a robust CI/CD pipeline.',
        'Designed RESTful APIs for data consumption by frontend dashboards.',
        'Improved decision-making by offering predictive analytics to end users.'
      ],
      github: 'https://github.com/felixkpt/matchoracle-be',
      live: 'https://matchoracle.felixkpt.com',
      skills: [
        'Laravel', 'Python', 'Machine Learning', 'Microservices',
        'CI/CD', 'GitHub Actions', 'Docker', 'REST APIs'
      ]
    },
    {
      name: 'My Portfolio Website',
      image: 'assets/images/project-screenshots/Screenshot 2025-07-16 132551.png',
      year: 2025,
      madeAt: null,
      stack: 'Angular + Tailwind CSS + Firebase',
      description: `Personal portfolio showcasing projects, skills, and experience with real-time updates and WebSocket integration.`,
      details: [
        'Developed a fully responsive portfolio using Angular and Tailwind CSS.',
        'Integrated Firebase for deployment and GitHub for CI/CD.',
        'Implemented a structured project and experience section with expandable detail views.',
        'Used custom WebSocket components for real-time project and event updates.',
        'Optimized for SEO and fast page load with lazy-loaded modules.'
      ],
      github: 'https://github.com/felixkpt/angular-ui-portfolio',
      live: 'https://felixkpt.com',
      skills: [
        'Angular', 'Tailwind CSS', 'Firebase Hosting',
        'RxJS', 'WebSocket', 'CI/CD', 'Responsive Design',
        'SEO Optimization', 'TypeScript'
      ]
    }
  ];


  readonly Github = Github
  readonly ExternalLink = ExternalLink
}
