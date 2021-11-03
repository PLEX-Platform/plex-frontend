import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {
  url = `http://httpbin.org/post`;

  constructor(private http: HttpClient) { };

  projects = [
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

  onSubmit() {
    this.http.post(this.url, this.projects).toPromise().then((data: any) => {
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

