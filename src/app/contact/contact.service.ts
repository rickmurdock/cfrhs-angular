import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Contact } from './contact';
import { CONTACTS_MOCK } from '../../data/contacts-mock';

@Injectable()
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of<Contact[]>(CONTACTS_MOCK);
  }
}
