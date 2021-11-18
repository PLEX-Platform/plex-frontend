import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { ProjectPriority } from '../ProjectPriority';
import { ProjectToPost } from '../ProjectToPost';
import { ProjectService } from '../project.service';
import { ProjectList } from '../ProjectList';
import { Project } from '../Project';


@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {
  url = `https://localhost:3001/api/studentchoices`;
  projectslist = {} as ProjectList
  preferenceArray: Project[] = []

  constructor(private http: HttpClient, private projectService: ProjectService) { };



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


  getAllProjects(): void {
    this.projectService.getAllProjects().subscribe((data) => {
      this.projectslist = data;
      console.log(this.projectslist)
    })
  }

  filterProjects() {
    let projectsToPost: ProjectToPost[] = []
    for (let index = 0; index < this.preferenceArray.length; index++) {
      let testObject = {
        ProjectId: this.preferenceArray[index].id,
        PriorityRank: index + 1
      }
      projectsToPost.push(testObject)
    }
    return projectsToPost
  }



  postObj = {
    ProjectPriorities: this.filterProjects(),
    StudentPCN: 411520
  }

  onSubmit() {
    this.http.post(this.url, this.postObj).toPromise().then((data: any) => {
      console.log(data);
    });
  }


  ngOnInit(): void {
    this.getAllProjects();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projectslist.results, event.previousIndex, event.currentIndex);
    this.preferenceArray = this.projectslist.results;
    console.log(this.preferenceArray)
  }
  // filterProjects() {
  //   let projectsToPost: ProjectToPost[] = []
  //   for (const index of this.projectslist.results) {
  //     let testObject = {
  //       ProjectId: index.id,
  //       PriorityRank: 7 // needs to be changed to index of project in drag and drop list
  //     }
  //     projectsToPost.push(testObject);
  //   }
  //   return projectsToPost
  // }
}

