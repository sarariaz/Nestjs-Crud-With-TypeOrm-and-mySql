import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'; // ye 4 khud add 
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
    ) { }








}
