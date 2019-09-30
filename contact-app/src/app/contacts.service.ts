import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Contact } from './contact';



@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contactUrl = 'http://localhost:3000/contact';  // URL to web api

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

  constructor(private http: HttpClient) { }


  //get all contacts from server
   getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl);
  }  

}
