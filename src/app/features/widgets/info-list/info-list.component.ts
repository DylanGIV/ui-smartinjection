import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-list',
  template: `
<mat-selection-list #shoes [multiple]="false">
  <mat-list-option *ngFor="let shoe of typesOfShoes" [value]="shoe">
    {{shoe}}
  </mat-list-option>
</mat-selection-list>

<p>
  Option selected: {{shoes.selectedOptions.selected[0]?.value}}
</p>
  `,
  styles: [
  ]
})
export class InfoListComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

}
