import { Component, OnInit, OnChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-wo-new-project',
  templateUrl: './wo-new-project.component.html',
  styleUrls: ['./wo-new-project.component.scss']
})
export class WoNewProjectComponent implements OnInit {

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  result: any;

  tableData!: any;
  projectWellData!: any;
  selectPassedCol = [
    "select",
    "wellName",
    "lease",
    "locationType",
    "location"
  ];
  passedCol = [
    "wellName",
    "lease"
  ];
  
  constructor(private _formBuilder: FormBuilder, private defaultService: DefaultService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      projectName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.getWells();
  }

  saveDraftBtn(): void {
    let formData = new FormData;

    this.defaultService.addRemoveWell(formData).subscribe(value => {
      this.result = value;
    })
  }

  createNewProject(): void {

    console.log(this.firstFormGroup.controls['projectName'].value);

    let formData = new FormData();
    formData.append('projectName', this.firstFormGroup.controls['projectName'].value);

    this.defaultService.createProject(formData).subscribe(value => {
      this.result = value;
    });

    // Above works but this returns undefined 
    console.log(this.result);
  }

  getWells(): void {
    this.defaultService.getWells().subscribe(value =>{
      this.tableData = value;
    });
  }

}
