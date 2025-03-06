import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TabOverviewComponent } from './tab-overview/tab-overview.component';
import { TabNameAndEmailComponent } from './tab-name-and-email/tab-name-and-email.component';
import { TabPrivateComponent } from './tab-private/tab-private.component';
import { TabWorkComponent } from './tab-work/tab-work.component';
import { TabNotesComponent } from './tab-notes/tab-notes.component';
import { TabFamilyComponent } from './tab-family/tab-family.component';

import { Customer } from '../../../../interfaces/customer.interface';
import { Company } from '../../../../interfaces/company.interface';

import { DataService } from '../../../../firebase-service/dataservice.service'

@Component({
  selector: 'app-add-new-user',
  imports: [ButtonModule, CommonModule, Dialog, FormsModule, ReactiveFormsModule, TabViewModule, TabOverviewComponent,TabNameAndEmailComponent,TabPrivateComponent, TabWorkComponent, TabFamilyComponent, TabNotesComponent],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.scss'
})
export class AddNewUserComponent implements OnInit {
  company!: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    this.company = this.fb.group({
      street: '',
      place: '',
      federalState: '',
      zipCode: '',
      state: '',
      company: '',
      position: '',
      department: '',
      office: '',
      phone: '',
      mobilePhone: '',
      fax: '',
      website: ''
    });
  }

saveTabCompanyData() {
    console.log(this.company.value);
    console.log("ZipCode: ", this.company.get('zipCode')?.value);
    // const customerData = this.company.value;
    // this.dataService.saveCompanyData(customerData); // Speichern in Firebase
}

  get visible(): boolean {
    return this.dataService.visible;
  }

  set visible(value: boolean) {
    this.dataService.visible = value;
  }
}
