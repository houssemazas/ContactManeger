import { Component } from '@angular/core';
import { Contact } from "../models/Contact";
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent {
  title(title:any){
    throw new Error("Method not implemented.");
  }
  contact:Contact=new Contact(0, '', '', '', 'Work', '', '');
  listContacts:Array<Contact>=new Array<Contact>();
  constructor() {
    // Populate the listContacts array with sample data
    // (this part should remain the same as before)
  }
  onSubmit(){
        // Add logic to handle form submission
        console.log('Form submitted:', this.contact);
        // Optionally, you can push the form data into the listContacts array
        this.listContacts.push(this.contact);
        // Reset the form or perform any other necessary actions
        this.contact = new Contact(0, '', '', '', 'Work', '', '');
  }
}