import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import { Company } from '../../../../../interfaces/company.interface';

import { DataService } from '../../../../../firebase-service/dataservice.service'

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-tab-work',
  imports: [ButtonModule, FormsModule, IconFieldModule, InputTextModule, InputIconModule, ReactiveFormsModule, SelectModule, TextareaModule],
  templateUrl: './tab-work.component.html',
  styleUrl: './tab-work.component.scss'
})
export class TabWorkComponent implements OnInit {
  cities: City[] | undefined;
  selectedCity: City | undefined;
  visible: boolean = false;
  @Input() company!: FormGroup;

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
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
  ];
}
  

  showAddCostumerData() {
      this.visible = true;
  }

  // ngOnInit() {
  //     this.cities = [
  //         { name: 'New York', code: 'NY' },
  //         { name: 'Rome', code: 'RM' },
  //         { name: 'Paris', code: 'PRS' }
  //     ];
  // }
}
