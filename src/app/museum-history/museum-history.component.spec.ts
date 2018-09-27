import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumHistoryComponent } from './museum-history.component';

describe('MuseumHistoryComponent', () => {
  let component: MuseumHistoryComponent;
  let fixture: ComponentFixture<MuseumHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
