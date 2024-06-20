import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JlComponent } from './jl.component';

describe('JlComponent', () => {
  let component: JlComponent;
  let fixture: ComponentFixture<JlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
