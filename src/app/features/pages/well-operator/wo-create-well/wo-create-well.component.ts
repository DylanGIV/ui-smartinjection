import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormsModule, NgForm } from '@angular/forms';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-wo-create-well',
  templateUrl: './wo-create-well.component.html',
  styleUrls: ['./wo-create-well.component.scss']
})
export class WoCreateWellComponent implements OnInit {

  wellForm!: FormGroup;
  result: any;
  filesToUpload!: File[];

  constructor(private fb: FormBuilder, private defaultService: DefaultService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.wellForm = this.fb.group ({
      wells: this.fb.array([
        this.newWell()
      ])
    });
  }

  newWell(): FormGroup {
    return this.fb.group({
      wellName: '',
      lease: '',
      wellType: '',
      locationType: '',
      location: this.fb.group({
        x: '',
        y: '',
        z: ''
      }),
      attachment: ''
    });
  }

  get wells(): FormArray {
    return this.wellForm.get('wells') as FormArray;
  }

  onSubmit(): void {
    console.log(this.wellForm);
    console.log(this.wellForm.value.wells[0].wellName)
  }

  submitWell(): void {
    console.log("Submit Well");
    console.log("Form: ", this.wellForm);

    console.log("attachment: ", this.wellForm.value.wells[0].attachment.files[0]);

    let wellArrayLen = this.wellForm.value.wells.length;

    for (let i=0; i < wellArrayLen; i++) {
      console.log("inside well");

      let formData = new FormData();
      formData.append('wellName', this.wellForm.value.wells[i].wellName);
      formData.append('wellType', this.wellForm.value.wells[i].wellType);
      formData.append('lease', this.wellForm.value.wells[i].lease);
      formData.append('xLoc', this.wellForm.value.wells[i].location.x);
      formData.append('yLoc', this.wellForm.value.wells[i].location.y);
      formData.append('zLoc', this.wellForm.value.wells[i].location.z);
      formData.append('locationType', this.wellForm.value.wells[i].locationType);
      formData.append('attachment', this.wellForm.value.wells[i].attachment.files[i]);

      this.defaultService.createWell(formData).subscribe(value => {
        this.result = value;
      });

      console.log(this.result);
    }

  }

}
