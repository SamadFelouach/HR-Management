import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatureComponent } from './condidature.component';

describe('CondidatureComponent', () => {
  let component: CondidatureComponent;
  let fixture: ComponentFixture<CondidatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondidatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
