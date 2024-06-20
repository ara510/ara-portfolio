import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfamComponent } from './rfam.component';

describe('RfamComponent', () => {
  let component: RfamComponent;
  let fixture: ComponentFixture<RfamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RfamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
