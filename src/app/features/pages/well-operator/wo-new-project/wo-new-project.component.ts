import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { DefaultServiceService } from 'src/app/core/services/default-service.service';

@Component({
  selector: 'app-wo-new-project',
  templateUrl: './wo-new-project.component.html',
  styleUrls: ['./wo-new-project.component.scss']
})
export class WoNewProjectComponent implements OnInit {

  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  name!: string;
  result!: any;
  updateProjectName!: any;

  //-- Passing Project Name --
  pName!: string;


  constructor(private _formBuilder: FormBuilder, private defaultService: DefaultServiceService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.defaultService.getProjectName().subscribe(name => {
      this.updateProjectName = name;
    })
  }

  submitBtn(): void {

  }
}
