import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS_MOCK } from '../../data/contacts-mock';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];
  // contact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {    
    this.getContacts();
  }

  private getContacts(): void {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }
}
