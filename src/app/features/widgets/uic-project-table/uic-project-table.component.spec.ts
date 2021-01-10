import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UicProjectTableComponent } from './uic-project-table.component';

describe('UicProjectTableComponent', () => {
  let component: UicProjectTableComponent;
  let fixture: ComponentFixture<UicProjectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UicProjectTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UicProjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
