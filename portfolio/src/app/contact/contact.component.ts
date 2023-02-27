import { Component, } from '@angular/core';
import { FileService } from '../file.service';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  contact: Contact = new Contact();
  constructor(private fileService:FileService){
    this.fileService.readFile('../../assets/json/contact.json').subscribe(data=> {
      this.contact = data as Contact;
    });
  }
}
