import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhComponent } from './nh.component';

describe('NhComponent', () => {
  let component: NhComponent;
  let fixture: ComponentFixture<NhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
