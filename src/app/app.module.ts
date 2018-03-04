import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { HistoryComponent } from './history/history.component';
import { MuseumComponent } from './museum/museum.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShopComponent } from './shop/shop.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LinksComponent } from './links/links.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterUpperComponent } from './footer-upper/footer-upper.component';
import { FooterLowerComponent } from './footer-lower/footer-lower.component';
import { HomeComponent } from './home/home.component';
import { MuseumHistoryComponent } from './museum-history/museum-history.component';
import { MuseumInfoComponent } from './museum-info/museum-info.component';
import { BoardComponent } from './board/board.component';
import { MembershipComponent } from './membership/membership.component';
import { ContactService } from './contact/contact.service';
import { GalleryService } from './gallery/gallery.service';
import { MembershipService } from './membership/membership.service';
import { BoardService } from './board/board.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'board', component: BoardComponent},
  { path: 'membership', component: MembershipComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'links', component: LinksComponent },
  { path: 'museum', component: MuseumComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'shop', component: ShopComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TitleBarComponent,
    HistoryComponent,
    MuseumComponent,
    GalleryComponent,
    ShopComponent,
    NewsletterComponent,
    LinksComponent,
    NavBarComponent,
    FooterUpperComponent,
    FooterLowerComponent,
    HomeComponent,
    MuseumHistoryComponent,
    MuseumInfoComponent,
    BoardComponent,
    MembershipComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [BoardService, ContactService, GalleryService, MembershipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
