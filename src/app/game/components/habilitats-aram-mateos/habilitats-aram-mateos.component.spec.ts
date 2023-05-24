import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitatsAramMateosComponent } from './habilitats-aram-mateos.component';

describe('HabilitatsAramMateosComponent', () => {
  let component: HabilitatsAramMateosComponent;
  let fixture: ComponentFixture<HabilitatsAramMateosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitatsAramMateosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitatsAramMateosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
