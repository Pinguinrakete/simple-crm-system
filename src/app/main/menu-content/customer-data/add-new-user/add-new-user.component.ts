import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TabOverviewComponent } from './tab-overview/tab-overview.component';
import { TabNameAndEmailComponent } from './tab-name-and-email/tab-name-and-email.component';
import { TabPrivateComponent } from './tab-private/tab-private.component';
import { TabWorkComponent } from './tab-work/tab-work.component';
import { TabNotesComponent } from './tab-notes/tab-notes.component';
import { TabFamilyComponent } from './tab-family/tab-family.component';

import { Customer } from '../../../../interfaces/customer.interface';
import { Company } from '../../../../interfaces/company.interface';

import { CostumerAndCompanyService } from '../../../../firebase-service/costumer-and-company.service'

@Component({
  selector: 'app-add-new-user',
  imports: [ButtonModule, CommonModule, Dialog, FormsModule, TabViewModule, TabOverviewComponent,TabNameAndEmailComponent,TabPrivateComponent, TabWorkComponent, TabFamilyComponent, TabNotesComponent],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.scss'
})
export class AddNewUserComponent {
  @Input() company!:Company;
  @Input() customer!:Customer;

  constructor(private costumerAndCompanyService: CostumerAndCompanyService) { }

  get visible(): boolean {
    return this.costumerAndCompanyService.visible;
  }

  set visible(value: boolean) {
    this.costumerAndCompanyService.visible = value;
  }
}
