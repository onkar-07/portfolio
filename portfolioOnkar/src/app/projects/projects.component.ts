import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Project One',
      description: 'Description of project one.',
      link: 'https://linkto.project1.com',
    },
    {
      name: 'Project Two',
      description: 'Description of project two.',
      link: 'https://linkto.project2.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
