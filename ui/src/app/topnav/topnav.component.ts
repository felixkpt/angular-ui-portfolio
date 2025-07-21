import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';

@Component({
  selector: 'app-topnav',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent {
  @Input() darkMode!: boolean;
  @Output() darkModeChange = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.darkModeChange.emit(!this.darkMode);
  }

  @Input() menuOpen!: boolean;
  @Output() toggleMenu = new EventEmitter<boolean>();

  readonly Sun = Sun;
  readonly Moon = Moon;
}
