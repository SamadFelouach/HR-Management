import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoitmessagesComponent } from './boitmessages.component';

describe('BoitmessagesComponent', () => {
  let component: BoitmessagesComponent;
  let fixture: ComponentFixture<BoitmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoitmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoitmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
