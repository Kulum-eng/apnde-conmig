import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CromocuentoComponent } from './cromocuento.component';

describe('CromocuentoComponent', () => {
  let component: CromocuentoComponent;
  let fixture: ComponentFixture<CromocuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CromocuentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CromocuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
