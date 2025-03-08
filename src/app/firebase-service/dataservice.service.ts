import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getFirestore, Firestore, collection, onSnapshot, QuerySnapshot, doc, setDoc, deleteDoc, updateDoc, query, where, limit, orderBy } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  // companies: Company[] = [];
  // customers: Customer[] = [];
  private _visible: boolean = false;

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
  }

  constructor(private db: Firestore) { }

  // saveCompanyData(data: Company): Promise<void> {
  //   const dataRef = collection(this.db, 'data'); // 'data' ist der Name des Pfades in Firebase
  //   const docRef = doc(dataRef); // Optional: du kannst ein Dokument explizit referenzieren oder es automatisch erstellen lassen
  //   return setDoc(docRef, data).then(() => {
  //     console.log('Daten gespeichert!');
  //   }).catch((error) => {
  //     console.error('Fehler beim Speichern der Daten:', error);
  //   });
  // }


    // Methode zum Abrufen der gespeicherten Firmendaten aus Firestore
    // getCompanyData(): Observable<Company[]> {
    //   const dataRef = collection(this.db, 'data');
    //   return new Observable<Company[]>((observer) => {
    //     const unsubscribe = onSnapshot(dataRef, (snapshot) => {
    //       this.companies = snapshot.docs.map(doc => doc.data() as Company); // Daten in das Array 'company' umwandeln
    //       observer.next(this.companies);
    //     }, (error) => {
    //       observer.error(error);
    //     });
    //     return () => unsubscribe();
    //   });
    // }
}

