import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { ProjectPriority } from '../ProjectPriority';
import { ProjectToPost } from '../ProjectToPost';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {
  url = `https://localhost:5001/api/studentchoices`;

  constructor(private http: HttpClient) { };



  testprojects = [
    'Extending the ACI Rental System',
    'Extending the Fontys iPost System',
    'PLEX (Project Leader eXcellence platform)',
    'Mobiele Toegang voor Huisartsen',
    'Medicatiebewaking door Patient',
    'Digitaal Uitzendbureau',
    'Validation of MO Messages Workflow',
    'Security Awareness Trainer',
    'Onboarding Gamification'
  ];

  projects: ProjectPriority[] = [
    {
      id: 1,
      priorityrank: 1,
      name: "Extending the ACI Rental System"
    },
    {
      id: 2,
      priorityrank: 4,
      name: "Extending the Fontys iPost System"
    },
    {
      id: 3,
      priorityrank: 2,
      name: "PLEX (Project Leader eXcellence platform)"
    },
    {
      id: 4,
      priorityrank: 3,
      name: "Mobiele Toegang voor Huisartsen"
    },
    {
      id: 5,
      priorityrank: 8,
      name: "Medicatiebewaking door Patient"
    },
    {
      id: 6,
      priorityrank: 5,
      name: "Digitaal Uitzendbureau"
    },
    {
      id: 7,
      priorityrank: 9,
      name: "Validation of MO Messages Workflow"
    },
    {
      id: 8,
      priorityrank: 6,
      name: "Security Awareness Trainer"
    },
    {
      id: 9,
      priorityrank: 7,
      name: "Onboarding Gamification"
    }
  ]




  filterProjects() {
    let projectsToPost: ProjectToPost[] = []
    for (const index of this.projects) {
      let testObject = {
        ProjectId: index.id,
        PriorityRank: index.priorityrank
      }
      projectsToPost.push(testObject);
    }
    return projectsToPost
  }

  postObj = {
    ProjectPriorities: this.filterProjects(),
    StudentPCN: 511420
  }

  onSubmit() {
    this.http.post(this.url, this.postObj).toPromise().then((data: any) => {
      console.log(data);
    });
  }


  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
    console.log(this.projects)
  }
}

