import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wo-create-well',
  templateUrl: './wo-create-well.component.html',
  styleUrls: ['./wo-create-well.component.scss']
})
export class WoCreateWellComponent implements OnInit {

  wellForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    
  }

}
