import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumComponent } from './museum.component';
import { MuseumHistoryComponent } from '../museum-history/museum-history.component';
import { MuseumInfoComponent } from '../museum-info/museum-info.component'

describe('MuseumComponent', () => {
  let component: MuseumComponent;
  let fixture: ComponentFixture<MuseumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumComponent, MuseumHistoryComponent, MuseumInfoComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
