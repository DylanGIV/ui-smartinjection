import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wo-create-well',
  templateUrl: './wo-create-well.component.html',
  styleUrls: ['./wo-create-well.component.scss']
})
export class WoCreateWellComponent implements OnInit {

  wellForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

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
      })
    });
  }

  get wells(): FormArray {
    return this.wellForm.get('wells') as FormArray;
  }

  onSubmit(): void {
    console.log(this.wellForm);
    console.log(this.wellForm.value.wells[0].wellName)
  }

}
