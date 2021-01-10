import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewWellsTableComponent } from './overview-wells-table.component';

describe('OverviewWellsTableComponent', () => {
  let component: OverviewWellsTableComponent;
  let fixture: ComponentFixture<OverviewWellsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewWellsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewWellsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
