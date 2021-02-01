import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'selection-table',
  template: `
    <!-- Bugs: mat-form-field is broken -->
    <!-- <mat-form-field>
      <mat-label>Filter</mat-label>
      <input
        matInput
        (keyup)="applyFilter($event)"
        placeholder="Ex. ium"
        #input
      />
    </mat-form-field> -->

    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
      <!-- Checkbox Column -->
      <ng-container matColumnDef="select">
        <th mat-header-cell *matHeaderCellDef>
          <mat-checkbox
            (change)="$event ? masterToggle() : null"
            [checked]="selection.hasValue() && isAllSelected()"
            [indeterminate]="selection.hasValue() && !isAllSelected()"
            [aria-label]="checkboxLabel()"
          >
          </mat-checkbox>
        </th>
        <td mat-cell *matCellDef="let row">
          <mat-checkbox
            (click)="$event.stopPropagation()"
            (change)="$event ? selection.toggle(row) : null"
            [checked]="selection.isSelected(row)"
            [aria-label]="checkboxLabel(row)"
          >
          </mat-checkbox>
        </td>
      </ng-container>

      <!-- Well Name Column -->
      <ng-container matColumnDef="wellName">
        <th mat-header-cell *matHeaderCellDef>Well Name</th>
        <td mat-cell *matCellDef="let element">{{ element.wellName }}</td>
      </ng-container>

      <!-- Lease Column -->
      <ng-container matColumnDef="lease">
        <th mat-header-cell *matHeaderCellDef>Lease</th>
        <td mat-cell *matCellDef="let element">{{ element.lease }}</td>
      </ng-container>

      <!-- Location Type Column -->
      <ng-container matColumnDef="locationType">
        <th mat-header-cell *matHeaderCellDef>Location Type</th>
        <td mat-cell *matCellDef="let element">{{ element.locationType }}</td>
      </ng-container>

      <!-- Location Column -->
      <ng-container matColumnDef="location">
        <th mat-header-cell *matHeaderCellDef>Location</th>
        <td mat-cell *matCellDef="let element">{{ element.location }}</td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

      <!-- Row shown when there is no matching data. -->
      <tr class="mat-row" *matNoDataRow>
        <td class="mat-cell" colspan="4">
          <!-- No data matching the filter "{{ input.value }}" -->
        </td>
      </tr>
    </table>
  `,
  styles: [
    `
      table {
        width: 100%;
      }

      .mat-form-field {
        font-size: 14px;
        width: 100%;
      }
    `,
  ],
})
export class SelectionTableComponent implements OnInit, OnChanges {
  displayedColumns!: string[];
  dataSource = new MatTableDataSource([]as any[]);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @Input() data!: any[];

  @Input() col!: any[];

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.col;
  }

  ngOnChanges(): void {}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
