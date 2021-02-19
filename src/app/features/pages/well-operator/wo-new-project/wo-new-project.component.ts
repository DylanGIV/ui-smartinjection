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

  ngOnChanges(value: any) {
    this.wellTable = value;
  }

  updateWellList(wellList: any[]) {
    console.log("in parent component: ", wellList);

    this.ngOnChanges(wellList);

    console.log(this.wellTable);
  }

  

  // **** UNBINDED ****
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

    // for (let i=0; i < this.wellTable.length; i++){
    //   formData.append('projectName', this.firstFormGroup.controls['projectName'].value);
    //   formData.append('externalIds', externalIDArray[i]);
    //   formData.append('updates', updateArray[i]);
      
    //   this.defaultService.addRemoveWell(formData).subscribe(value => {
    //     this.result = value;
    //   })
    // }
    
    formData.append('projectName', this.firstFormGroup.controls['projectName'].value);
    formData.append('externalIds', externalIDArray[0]);
    formData.append('updates', updateArray[0]);

    console.log('externalIds', externalIDArray[0]);
    
    this.defaultService.addRemoveWell(formData).subscribe(value => {
      this.result = value;
    })
  }

  

  // *********** BINDED ***************
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
