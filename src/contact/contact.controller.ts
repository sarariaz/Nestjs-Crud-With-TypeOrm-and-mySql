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

    @Post('create')
    async create(@Body() contactData: Contact): Promise<any> {
      return this.contactService.create(contactData);//We use the @Body decorator to extract and inject the body of the POST request in the create() method. 
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> { //We extract and inject the id using the @Param() decorator and we call the delete() method of ContactsService.
      return this.contactService.delete(id);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.contactService.update(contactData);
    }  

}

