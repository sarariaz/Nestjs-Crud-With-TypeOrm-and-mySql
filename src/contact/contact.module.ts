import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller'; // ye 3 khud se likhny
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity';


@Module({
  providers: [ContactService],
  controllers: [ContactController] ,//add it
  imports: [
    TypeOrmModule.forFeature([Contact]), //add it, forFeature() method to define which repositories are registered in the current scope. 
  ],                                      // now typeorm will recognize the Contact entity
})
export class ContactModule {}
