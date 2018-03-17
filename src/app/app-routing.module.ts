import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseumComponent } from './museum/museum.component';
// import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{ path: 'museum', component: MuseumComponent },
// { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
