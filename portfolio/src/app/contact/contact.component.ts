import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { Contact, SocialMedia } from '../model/contact.model';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contact: Contact;
  constructor(private fileService:FileService){}

  ngOnInit(): void {
    this.fileService.readFile('../../assets/json/contact.json').subscribe(data=> {
      this.contact = data as Contact;
    });
  }
}
