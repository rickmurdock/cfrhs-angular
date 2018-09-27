import { Component, OnInit } from '@angular/core';
import { Membership } from './membership';
import { MEMBERSHIP_MOCK } from '../../data/membership-mock';
import { MembershipService } from './membership.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.less']
})
export class MembershipComponent implements OnInit {
  MembershipApplicationLink = 'https://drive.google.com/file/d/0BxsaKH9lyrNwYUNUR0NXX2VpdXc/view?usp=sharing';
  memberships: Membership[];

  constructor(private membershipServcie: MembershipService) { }

  ngOnInit() {
    this.getMemberships();
  }

  private getMemberships(): void {
    this.membershipServcie.getMemberships().subscribe(memberships => this.memberships = memberships);
  }
}
