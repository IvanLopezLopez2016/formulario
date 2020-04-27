import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {MessageI} from '../models/message.interface';
@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private conatctCollection: AngularFirestoreCollection<MessageI>;
  constructor(private afs: AngularFirestore) {
    this.conatctCollection= afs.collection <MessageI>('contacts');
   }
   saveMessage(newContact: MessageI): void{
     this.conatctCollection.add(newContact);
   }
}
