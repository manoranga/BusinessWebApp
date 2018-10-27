import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JambotrnComponent } from './jambotrn.component';

describe('JambotrnComponent', () => {
  let component: JambotrnComponent;
  let fixture: ComponentFixture<JambotrnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JambotrnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JambotrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
