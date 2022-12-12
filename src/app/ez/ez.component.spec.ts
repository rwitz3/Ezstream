import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzComponent } from './ez.component';

describe('EzComponent', () => {
  let component: EzComponent;
  let fixture: ComponentFixture<EzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
