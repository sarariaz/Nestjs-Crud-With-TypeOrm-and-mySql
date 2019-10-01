import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts : Contact[];
 // contact : Contact;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactsService.getContacts()
    .subscribe(contacts => {
      this.contacts = contacts;
    console.log("hi"); 
  });
    
  }

  addContact(){
    console.log(this.contact)
    this.contactsService.addContact(this.contact)
    .subscribe(contact => {
     this.contacts.push(this.contact);
     this.getContacts();
   });
  }

}
