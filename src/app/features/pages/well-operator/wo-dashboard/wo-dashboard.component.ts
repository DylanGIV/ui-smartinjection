import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wo-dashboard',
  templateUrl: './wo-dashboard.component.html',
  styleUrls: ['./wo-dashboard.component.scss']
})
export class WoDashboardComponent implements OnInit {

  sampleData = SAMPLE_DATA;
  passedCol = [
    'projectName',
    'status',
    'UICProjectNumber'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

const SAMPLE_DATA: any[] = [
  {projectName: "Hello", status: "Unapproved", UICProjectNumber: "N/A"}
];