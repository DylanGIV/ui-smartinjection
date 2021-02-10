import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'expanding-table',
  template: `
    <table
      mat-table
      [dataSource]="dataSource"
      multiTemplateDataRows
      class="mat-elevation-z8"
    >
      <!-- <ng-container matColumnDef="{{ column }}" *ngFor="let column of columnsToDisplay">
        <th mat-header-cell *matHeaderCellDef>{{ column }}</th>
        <td mat-cell *matCellDef="let element">{{ element[column] }}</td>
      </ng-container> -->

      <ng-container matColumnDef="wellName">
        <th mat-header-cell *matHeaderCellDef>Well Name </th>
        <td mat-cell *matCellDef="let element"> {{ element.state.data.wellName }}</td>
      </ng-container>
      <ng-container matColumnDef="lease">
        <th mat-header-cell *matHeaderCellDef> Lease </th>
        <td mat-cell *matCellDef="let element"> {{ element.state.data.lease }}</td>
      </ng-container>
      <ng-container matColumnDef="locationType">
        <th mat-header-cell *matHeaderCellDef> Location Type </th>
        <td mat-cell *matCellDef="let element"> {{ element.state.data.locationType }}</td>
      </ng-container>
      <ng-container matColumnDef="location">
        <th mat-header-cell *matHeaderCellDef>Location</th>
        <td mat-cell *matCellDef="let element"> {{ element.state.data.location }}</td>
      </ng-container>

      <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->
      <ng-container matColumnDef="expandedDetail">
        <td
          mat-cell
          *matCellDef="let element"
          [attr.colspan]="columnsToDisplay.length"
        >
          <div
            class="example-element-detail"
            [@detailExpand]="
              element == expandedElement ? 'expanded' : 'collapsed'
            "
          >
            <div class="example-element-diagram">
              <!-- <div class="example-element-position">{{ element.state.data.wellName }}</div> -->
              <!-- <div class="example-element-symbol">{{ element.symbol }}</div> -->
              <div class="example-element-name">
                <strong>Well Name:</strong>
                  {{ element.state.data.wellName }}
              </div>
              <div class="example-element-weight">
                <strong>Lease:</strong>
                 {{ element.state.data.lease }}
              </div>
              <div class="example-element-weight">
                <strong>Location Type:</strong>
                {{ element.state.data.locationType }}
              </div>
              <div class="example-element-weight">
                <strong>Location:</strong>
                 {{ element.state.data.location }}
              </div>
            </div>
            <!-- <div class="example-element-description">
              {{ element.description }}
              <span class="example-element-description-attribution">
                -- Wikipedia
              </span>
            </div> -->
          </div>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
      <tr
        mat-row
        *matRowDef="let element; columns: columnsToDisplay"
        class="example-element-row"
        [class.example-expanded-row]="expandedElement === element"
        (click)="expandedElement = expandedElement === element ? null : element"
      ></tr>
      <tr
        mat-row
        *matRowDef="let row; columns: ['expandedDetail']"
        class="example-detail-row"
      ></tr>
    </table>
  `,
  styles: [
    `
    table {
  width: 100%;
}

tr.example-detail-row {
  height: 0;
}

tr.example-element-row:not(.example-expanded-row):hover {
  background: whitesmoke;
}

tr.example-element-row:not(.example-expanded-row):active {
  background: #efefef;
}

.example-element-row td {
  border-bottom-width: 0;
}

.example-element-detail {
  overflow: hidden;
  display: flex;
}

.example-element-diagram {
  min-width: 80px;
  border: 2px solid black;
  padding: 8px;
  font-weight: lighter;
  margin: 8px 0;
  height: 104px;
  width: 100%;
}

.example-element-symbol {
  font-weight: bold;
  font-size: 40px;
  line-height: normal;
}

.example-element-description {
  padding: 16px;
}

.example-element-description-attribution {
  opacity: 0.5;
}s`,
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})

/* ************************************************************** */
/* ************************************************************** */
/* --------------------- C L A S S INFO ------------------------- */
/* ************************************************************** */
/* ************************************************************** */

export class ExpandingTableComponent implements OnInit, OnChanges {
  dataSource = new MatTableDataSource([]as any[]);
  columnsToDisplay!: string[];
  expandedElement!: PeriodicElement | null;

  @Input() data!: any[];

  @Input() col!: any[];

  constructor() {}

  ngOnInit(): void {
    this.columnsToDisplay = this.col;
  }
  
  ngOnChanges(): void {
    this.dataSource.data = this.data;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];
