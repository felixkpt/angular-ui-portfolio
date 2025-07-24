import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Github, Linkedin, LucideAngularModule, Mail, MoveRight, X } from 'lucide-angular';

@Component({
  selector: 'app-sidenav',
  imports: [RouterModule, CommonModule, LucideAngularModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {

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

  ngOnInit(): void {
    const img = new Image();
    img.src = 'assets/images/avatar-dark.png';
  }

  readonly X = X;
  readonly MoveRight = MoveRight
  readonly Github = Github
  readonly Linkedin = Linkedin
  readonly Mail = Mail
}
