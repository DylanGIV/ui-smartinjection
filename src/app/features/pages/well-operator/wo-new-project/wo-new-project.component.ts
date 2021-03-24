import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit, OnChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-wo-new-project',
  templateUrl: './wo-new-project.component.html',
  styleUrls: ['./wo-new-project.component.scss']
})
export class WoNewProjectComponent implements OnInit, OnChanges {

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  result: any;

  tableData!: any;
  projectWellData!: any;
  wellTable!: any;
  selectPassedCol = [
    "select",
    "wellName",
    "lease",
    "locationType",
    "location"
  ];
  stepThreeCol = [
    "wellName",
    "lease"
  ];
  stepTwoCol = [
    "wellName"
  ];
  
  constructor(
    private _formBuilder: FormBuilder, 
    private defaultService: DefaultService) {}

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

  ngOnChanges(value: any) {
    this.wellTable = value;
  }

  // *********** BINDED ***************

  updateWellList(wellList: any[]) {
    console.log("in parent component: ", wellList);

    this.ngOnChanges(wellList);

    console.log(this.wellTable);
  }

  saveDraftBtn(): void {
    let formData = new FormData;
    let updateArray: string[] = [];
    let externalIDArray: string[] = []; 
    
    for(let i=0; i < this.wellTable.length; i++) { 
      externalIDArray.push(this.wellTable[i].state.data.linearId.externalId);
      updateArray.push(this.firstFormGroup.controls['projectName'].value); 
    }

    console.log("externalID: ", externalIDArray);
    console.log("updateArray: ", updateArray);
    
    formData.append('projectName', this.firstFormGroup.controls['projectName'].value);
    formData.append('externalIds', externalIDArray.toString());
    formData.append('updates', updateArray.toString());

    console.log("externalId String: ", externalIDArray.toString());
    console.log("updates String: ", updateArray.toString());

    console.log('externalIds', externalIDArray[0]);
    
    this.defaultService.addRemoveWell(formData).subscribe(value => {
      this.result = value;
    })
  }

  submitBttn(): void {
    console.log("submit dat project!");

    let formData = new FormData;
    formData.append('externalId', this.firstFormGroup.controls['projectName'].value);

    this.defaultService.submitToCalGem(formData).subscribe(value => {
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
      let wellsNoProject: any = value;
      let newWells: any[] = [];

      // filters out all the wells with projects already
      for(let i = 0; i < wellsNoProject.length; i++){
        if (wellsNoProject[i].state.data.projectName == "N/A"){
          newWells.push(wellsNoProject[i]);
        }
      }
      this.tableData = newWells;
    });
  }

}
