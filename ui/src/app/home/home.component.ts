import { Component } from '@angular/core';
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [ExperienceComponent, ProjectsComponent]
})
export class HomeComponent {
  darkMode = false;

}
