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
  name!: string;
  result: any;
  temp: any;


  constructor(private _formBuilder: FormBuilder, private defaultService: DefaultService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      projectName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  saveDraftBtn() {
    let formData = new FormData;

    this.defaultService.addRemoveWell(formData).subscribe(value => {
      this.result = value;
    })
  }

<<<<<<< HEAD
  submitBtn() {
  }

  createNewProject(projectName: NgForm) {
=======
  createNewProject() {
>>>>>>> 4adf4c02f9ae1103484b6deae2628c234c8c7622

    console.log(this.firstFormGroup.controls['projectName'].value);

    let formData = new FormData();
    formData.append('projectName', this.firstFormGroup.controls['projectName'].value);

    this.defaultService.createProject(formData).subscribe(value => {
      this.result = value;
    });

    // Above works but this returns undefined 
    console.log(this.result);
  }

}
