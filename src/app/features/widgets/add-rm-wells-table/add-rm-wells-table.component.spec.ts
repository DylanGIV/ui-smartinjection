import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRmWellsTableComponent } from './add-rm-wells-table.component';

describe('AddRmWellsTableComponent', () => {
  let component: AddRmWellsTableComponent;
  let fixture: ComponentFixture<AddRmWellsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRmWellsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRmWellsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
