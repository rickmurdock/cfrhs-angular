import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Membership } from './membership';
import { MEMBERSHIP_MOCK } from '../../data/membership-mock';

@Injectable()
export class MembershipService {

  constructor() { }

  getMemberships(): Observable<Membership[]> {
    return of<Membership[]>(MEMBERSHIP_MOCK);
  }
}
