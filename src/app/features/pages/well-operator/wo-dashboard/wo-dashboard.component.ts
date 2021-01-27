import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-wo-dashboard',
  templateUrl: './wo-dashboard.component.html',
  styleUrls: ['./wo-dashboard.component.scss']
})
export class WoDashboardComponent implements OnInit {

  testDummy: any;

  tableData!: any;
  passedCol = [
    'projectName',
    'status',
    'UICProjectNumber'
  ];
  

  constructor(private defaultService:DefaultService) { }

  ngOnInit(): void {
    this.initializeProjects();
  }

  initializeProjects(): void {
    this.defaultService.getProjects().subscribe(value => {
      console.log(value);
      this.tableData = value;
      console.log("table data");
      console.log(this.tableData);
      // console.log(value[1].state.data.projectName);
    }) 
  }

}

const SAMPLE_DATA: any[] = [
  {projectName: "Hello", status: "Unapproved", UICProjectNumber: "N/A"}
];