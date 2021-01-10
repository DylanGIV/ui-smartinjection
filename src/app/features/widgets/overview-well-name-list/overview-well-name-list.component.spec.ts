import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewWellNameListComponent } from './overview-well-name-list.component';

describe('OverviewWellNameListComponent', () => {
  let component: OverviewWellNameListComponent;
  let fixture: ComponentFixture<OverviewWellNameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewWellNameListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewWellNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
