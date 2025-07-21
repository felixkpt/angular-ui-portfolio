import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from "./footer/footer.component";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidenavComponent, TopnavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ui-portfolio';
  darkMode = false;
  spotlightGradient = '';
  targetX = 0;
  targetY = 0;
  currentX = 0;
  currentY = 0;
  rafId: any;

  private router = inject(Router); // ✅ inject Router

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // ✅ scroll to top on route change
      });
  }

  onMouseMove(event: MouseEvent) {
    this.targetX = event.clientX;
    this.targetY = event.clientY;

    if (!this.rafId) {
      this.animateSpotlight();
    }
  }

  animateSpotlight() {
    this.currentX += (this.targetX - this.currentX) * 0.08;
    this.currentY += (this.targetY - this.currentY) * 0.08;

    const color = this.darkMode
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.13)';

    this.spotlightGradient = `
    radial-gradient(
      25vw 25vw at ${this.currentX}px ${this.currentY}px,
      ${color} 0%,
      transparent 80%
    )`;

    this.rafId = requestAnimationFrame(() => this.animateSpotlight());
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
