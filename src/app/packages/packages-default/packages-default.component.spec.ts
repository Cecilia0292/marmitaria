import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesDefaultComponent } from './packages-default.component';

describe('PackagesDefaultComponent', () => {
  let component: PackagesDefaultComponent;
  let fixture: ComponentFixture<PackagesDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagesDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagesDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
