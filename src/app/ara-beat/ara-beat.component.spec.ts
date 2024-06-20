import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AraBeatComponent } from './ara-beat.component';

describe('AraBeatComponent', () => {
  let component: AraBeatComponent;
  let fixture: ComponentFixture<AraBeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AraBeatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AraBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
