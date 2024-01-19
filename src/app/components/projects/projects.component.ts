import { Component } from '@angular/core';
import { ProjectsSideContentComponent } from './projects-side-content/projects-side-content.component';
import { ProjectsHeaderComponent } from './projects-header/projects-header.component';
import { ProjectsContentComponent } from './projects-content/projects-content.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsSideContentComponent, ProjectsHeaderComponent, ProjectsContentComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
