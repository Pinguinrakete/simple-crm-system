import { Component } from '@angular/core';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ReactiveFormsModule } from '@angular/forms';

import { Customer } from '../../../interfaces/customer.interface';
import { Company } from '../../../interfaces/company.interface';

import { DataService } from '../../../firebase-service/dataservice.service'

@Component({
  selector: 'app-customer-data',
  standalone: true,
  imports: [AddNewUserComponent ,ButtonModule, CommonModule, FormsModule, ReactiveFormsModule, TabViewModule],
  templateUrl: './customer-data.component.html',
  styleUrl: './customer-data.component.scss'
})
export class CostumerDataComponent {

  constructor(private dataService: DataService) { }

showAddCostumerData() {
  this.dataService.visible = true;
}
}