import { Controller } from '@nestjs/common';
import { Contact } from './contact.entity'; //ye 3 khud se
import { ContactService } from './contact.service';
import { Post,Put, Delete, Body, Param, Get } from  '@nestjs/common';

@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService){}

    @Get()
    index(): Promise<Contact[]> {
      return this.contactService.findAll();
    } 

}

