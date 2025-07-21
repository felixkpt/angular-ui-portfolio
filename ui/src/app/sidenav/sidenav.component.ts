import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Github, Linkedin, LucideAngularModule, Mail, MoveRight, X } from 'lucide-angular';

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

  @Output() toggleMenu = new EventEmitter<boolean>();

  transitioning = false;
  dark: boolean = false;

  readonly X = X;
  readonly MoveRight = MoveRight
  readonly Github = Github
  readonly Linkedin = Linkedin
  readonly Mail = Mail
}
