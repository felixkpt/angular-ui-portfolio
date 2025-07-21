import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Senior Software Engineer – Griffin Global Technologies',
      logo: 'assets/images/company-logos/1685756809157.png',
      period: 'Jan 2025 – Present',
      location: 'Nyeri, Kenya',
      description: `
Led the design and development of secure, high-performance enterprise APIs using ASP.NET Core, Java, and Node.js. Architected and implemented scalable microservices to handle increasing product demands while ensuring code maintainability and resilience.
Built and optimized Angular and React frontends for internal tools and client-facing platforms, improving UX and responsiveness. Managed CI/CD workflows using Azure DevOps, and automated infrastructure provisioning with Terraform and Docker containers orchestrated via Kubernetes.
Oversaw a team of six developers, conducted regular code reviews, enforced coding standards, and mentored junior engineers. Implemented comprehensive test coverage using Cypress and streamlined performance bottlenecks in backend services.
    `,
      skills: [
        'ASP.NET Core', 'Java', 'Node.js', 'React', 'Angular',
        'Docker', 'Kubernetes', 'Terraform', 'Azure DevOps', 'PostgreSQL',
        'CI/CD', 'Microservices Architecture', 'Cypress', 'Team Leadership'
      ]
    },
    {
      role: 'Software Engineer – Calltronix Kenya Limited',
      logo: 'assets/images/company-logos/1685756809153.gif',
      period: 'Oct 2022 – Dec 2024',
      location: 'Nairobi, Kenya',
      description: `
Built scalable and secure applications using Laravel, C#, Python, Vue.js, and React for various business-critical systems. Integrated Redis caching, WebSocket communication, and OAuth 2.0 authentication to enhance real-time capabilities and system security.
Deployed containerized microservices across Google Cloud Platform and Azure, leveraging Jenkins pipelines and Infrastructure as Code practices. Introduced GraphQL APIs for flexible data queries and participated in machine learning model development to enhance platform intelligence.
Led knowledge-sharing initiatives, mentored junior developers, and promoted a strong DevOps culture across the organization.
    `,
      skills: [
        'Laravel', 'C#', 'Python', 'Vue.js', 'React',
        'Redis', 'WebSockets', 'OAuth 2.0', 'PostgreSQL',
        'GCP', 'Azure', 'Docker', 'Jenkins', 'GraphQL', 'Machine Learning'
      ]
    },
    {
      role: 'Full-Stack Developer – Codverts Systems',
      logo: 'assets/images/company-logos/1685756771136.png',
      period: 'Sep 2021 – Oct 2022',
      location: 'Remote – Eldoret, Kenya',
      description: `
Engineered marketing automation and analytics solutions using Laravel and modern JavaScript frameworks (Vue.js and React). Developed custom Laravel packages to streamline core functionality and integrated Kafka for real-time data streaming.
Worked with Facebook Graph API to build data-driven marketing tools. Automated deployments using Docker and AWS Lambda, ensuring high system uptime and reduced manual interventions.
Played a key role in API testing with Postman and coordinated cross-functional teams to deliver robust, timely solutions.
    `,
      skills: [
        'Laravel', 'Vue.js', 'React', 'MongoDB', 'MySQL',
        'Kafka', 'Docker', 'AWS Lambda', 'Facebook Graph API',
        'CI/CD', 'Postman', 'Automation', 'Analytics'
      ]
    },
    {
      role: 'Laravel/Vue Developer – Shara Solutions',
      logo: 'assets/images/company-logos/1685756788056.jpg',
      period: 'Jun 2020 – Aug 2021',
      location: 'Nairobi, Kenya',
      description: `
Developed enterprise-grade web applications using Laravel and Vue.js, focusing on reusable component design and modular architecture. Built secure REST and GraphQL APIs integrated with RBAC and multi-factor authentication to protect sensitive user data.
Configured and optimized Docker-based CI/CD pipelines, and managed deployments using Nginx for high-performance delivery. Improved system performance by tuning complex PostgreSQL and MySQL queries.
    `,
      skills: [
        'Laravel', 'Vue.js', 'GraphQL', 'REST API',
        'PostgreSQL', 'MySQL', 'Docker', 'Nginx',
        'RBAC', 'CI/CD', 'Security', 'Authentication'
      ]
    },
    {
      role: 'Back-End Developer – C Webs Africa',
      logo: 'assets/images/company-logos/1685756751632.jpg',
      period: 'Jun 2018 – Jul 2019',
      location: 'Eldoret, Kenya',
      description: `
Built scalable and modular backend systems using Laravel for non-profits and SMEs across East Africa. Designed APIs with RBAC, implemented Laravel Jobs for background data processing, and established secure authentication layers.
Automated deployment pipelines using AWS Lambda and Docker, improving development speed and deployment reliability. Provided WordPress integrations and optimized server setups to support a diverse set of clients.
    `,
      skills: [
        'Laravel', 'PHP', 'MongoDB', 'MySQL',
        'AWS Lambda', 'Docker', 'Laravel Jobs',
        'WordPress', 'RBAC', 'API Development'
      ]
    }
  ];

}
