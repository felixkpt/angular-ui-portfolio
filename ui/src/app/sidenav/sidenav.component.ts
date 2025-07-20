import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Github, Linkedin, LucideAngularModule, Mail, MoveRight } from 'lucide-angular';

@Component({
  selector: 'app-sidenav',
  imports: [RouterModule, CommonModule, LucideAngularModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  @Input() menuOpen!: boolean;
  @Input() set darkMode(value: boolean) {
    this.transitioning = true
    setTimeout(() => {
      this.dark = value;
      this.transitioning = false;
    }, 10);
  }

  transitioning = false;
  dark: boolean = false;

  readonly MoveRight = MoveRight
  readonly Github = Github
  readonly Linkedin = Linkedin
  readonly Mail = Mail
}
