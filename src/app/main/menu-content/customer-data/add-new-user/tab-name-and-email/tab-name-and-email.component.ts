import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-tab-name-and-email',
  imports: [ButtonModule, IconFieldModule, InputTextModule, InputIconModule, SelectModule, TextareaModule],
  templateUrl: './tab-name-and-email.component.html',
  styleUrl: './tab-name-and-email.component.scss'
})
export class TabNameAndEmailComponent {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
      ];
  }
}
