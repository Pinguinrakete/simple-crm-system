import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../interfaces/company.interface';
import { Customer } from '../interfaces/customer.interface';
import { getFirestore, Firestore, collection, onSnapshot, QuerySnapshot, doc, setDoc, deleteDoc, updateDoc, query, where, limit, orderBy } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CostumerAndCompanyService {
  company: Company[] = [];
  customer: Customer[] = [];

  constructor(private firestore: Firestore) { }
}
