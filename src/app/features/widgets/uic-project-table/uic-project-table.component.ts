import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'uic-project-table',
  template: `
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

<!--- Note that these columns can be defined in any order.
      The actual rendered columns are set as a property on the row definition" -->

<!-- Project Name Column -->
<ng-container matColumnDef="projectName">
  <th mat-header-cell *matHeaderCellDef> Project Name </th>
  <td mat-cell *matCellDef="let element"> {{element.projectName}} </td>
</ng-container>

<!-- Status Column -->
<ng-container matColumnDef="status">
  <th mat-header-cell *matHeaderCellDef> Project Status </th>
  <td mat-cell *matCellDef="let element"> {{element.status}} </td>
</ng-container>

<!-- UIC Project Number Column -->
<ng-container matColumnDef="UICProjectNumber">
  <th mat-header-cell *matHeaderCellDef> UIC Project Number </th>
  <td mat-cell *matCellDef="let element"> {{element.UICProjectNumber}} </td>
</ng-container>

<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
  `,
  styles: [`
  /* Structure */
table {
  width: 100%;
}

.mat-form-field {
  font-size: 14px;
  width: 100%;
}
  `
  ]
})

export class UicProjectTableComponent implements OnInit {
  displayedColumns!: string[];
  dataSource = new MatTableDataSource([]as any[]);

  @Input()
  data!: any[];

  @Input()
  col!: any[];
  
  constructor() { }
  
  ngOnInit(): void {
    this.dataSource.data = this.data;
    this.displayedColumns = this.col;
  }
  
}