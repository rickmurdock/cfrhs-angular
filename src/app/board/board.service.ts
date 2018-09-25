import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Board } from './board';
import { CONTACTS_MOCK } from '../../data/contacts-mock';

@Injectable()
export class BoardService {

  constructor() { }

  getBoardMembers(): Observable<Board[]> {
    return of<Board[]>(CONTACTS_MOCK);
  }
}
