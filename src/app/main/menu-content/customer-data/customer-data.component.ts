import { Component } from '@angular/core';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
// import { Dialog } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';

import { Customer } from '../../../interfaces/customer.interface';
import { Company } from '../../../interfaces/company.interface';

import { CostumerAndCompanyService } from '../../../firebase-service/costumer-and-company.service'

@Component({
  selector: 'app-customer-data',
  standalone: true,
  imports: [AddNewUserComponent ,ButtonModule, CommonModule, FormsModule, TabViewModule],
  templateUrl: './customer-data.component.html',
  styleUrl: './customer-data.component.scss'
})
export class CostumerDataComponent {


  constructor(private costumerAndCompanyService: CostumerAndCompanyService) { }

showAddCostumerData() {
  this.costumerAndCompanyService.visible = true;
}
}