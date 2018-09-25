import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TitleBarComponent } from '../app/title-bar/title-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterUpperComponent } from '../app/footer-upper/footer-upper.component';
import { FooterLowerComponent } from '../app/footer-lower/footer-lower.component';
import { AppRoutingModule } from '../app/app-routing.module'


xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TitleBarComponent,
        NavBarComponent,
        FooterUpperComponent,
        FooterLowerComponent,
        AppRoutingModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
