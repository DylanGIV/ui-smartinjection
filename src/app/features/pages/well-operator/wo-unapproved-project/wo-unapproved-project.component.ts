import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-wo-unapproved-project',
  templateUrl: './wo-unapproved-project.component.html',
  styleUrls: ['./wo-unapproved-project.component.scss']
})
export class WoUnapprovedProjectComponent implements OnInit {

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  sampleData = SAMPLE_DATA;
  columnsToDisplay = [
    'wellName',
    'lease',
    'wellType',
    'locationType',
    'location',
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      projectName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }
  
  saveDraftBtn() {}
  submitBtn() {}
}

const SAMPLE_DATA: any[] = [
  { 
    wellName: "Well Name", 
    lease: "Lease Name", 
    wellType: "Well Type", 
    locationType: "Location Type NAD27",
    location: "X Y Z"
  }, 
  { 
    wellName: "Well Name 2", 
    lease: "Lease Name 2", 
    wellType: "Well Type 2", 
    locationType: "Location Type NAD27 2",
    location: "X Y Z"
  }, 
];
