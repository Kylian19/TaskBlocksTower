import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSideContentComponent } from './projects-side-content.component';

describe('ProjectsSideContentComponent', () => {
  let component: ProjectsSideContentComponent;
  let fixture: ComponentFixture<ProjectsSideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsSideContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsSideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
