import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TabOverviewComponent } from './tab-overview/tab-overview.component';
import { TabNameAndEmailComponent } from './tab-name-and-email/tab-name-and-email.component';
import { TabPrivateComponent } from './tab-private/tab-private.component';
import { TabWorkComponent } from './tab-work/tab-work.component';
import { TabNotesComponent } from './tab-notes/tab-notes.component';
import { TabFamilyComponent } from './tab-family/tab-family.component';
import { ContentInput } from '../../../../interfaces/data';
import { DataService } from '../../../../firebase-service/dataservice.service'

@Component({
  selector: 'app-add-new-user',
  imports: [ButtonModule, CommonModule, Dialog, ReactiveFormsModule, TabViewModule, TabOverviewComponent, TabNameAndEmailComponent, TabPrivateComponent, TabWorkComponent, TabFamilyComponent, TabNotesComponent],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.scss'
})
export class AddNewUserComponent {
  contentInput: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) { 
    this.contentInput = this.fb.group<ContentInput>({
      customerFirstName: '',
      customerSecondName: '',
      customerSurname: '',
      customerPersonalTitle: '',
      customerNickname: '',
      customerMan: true,
      customerWoman: false,
      customerEmail: '',
      customerTextarea: '',
      customerStreet: '',
      customerPlace: '',
      customerFederalState: '',
      customerZipCode: NaN,
      customerState: '',
      customerPhone: NaN,
      customerMobilePhone: NaN,
      customerFax: NaN,
      customerWebsite: '',
      customerBirthday: NaN,
      customerAnniversary: NaN,
      customerPartner: '',
      customerChildren: '',
      customerNotes: '',
      companyStreet: '',
      companyPlace: '',
      companyFederalState: '',
      companyZipCode: NaN,
      companyState: '',
      companyCompany: '',
      companyPosition: '',
      companyDepartment: '',
      companyOffice: '',
      companyPhone: NaN,
      companyMobilePhone: NaN,
      companyFax: NaN,
      companyWebsite: ''
    });
  }

saveTabCompanyData() {
    console.log(this.contentInput.value);
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