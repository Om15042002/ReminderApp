import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinescheduleComponent } from './medicineschedule.component';

describe('MedicinescheduleComponent', () => {
  let component: MedicinescheduleComponent;
  let fixture: ComponentFixture<MedicinescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinescheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
