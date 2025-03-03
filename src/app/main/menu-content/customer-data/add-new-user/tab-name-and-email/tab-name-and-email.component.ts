import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-tab-name-and-email',
  imports: [ButtonModule, CheckboxModule, IconFieldModule, InputTextModule, InputIconModule, SelectModule, TextareaModule],
  templateUrl: './tab-name-and-email.component.html',
  styleUrls: ['./tab-name-and-email.component.scss']
})
export class TabNameAndEmailComponent implements OnInit {
  woman: boolean = false;
  man: boolean = false;

  cities: City[] | undefined;
  selectedCity: City | undefined;
  visible: boolean = false;

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
    ];
  }

  showAddCostumerData() {
      this.visible = true;
  }

  onCheckboxChange() {
    if (this.woman || this.man) {
      this.woman = !this.woman;
      this.man = !this.man;
    }
  }
}