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
  selector: 'app-tab-work',
  imports: [ButtonModule, IconFieldModule, InputTextModule, InputIconModule, SelectModule, TextareaModule],
  templateUrl: './tab-work.component.html',
  styleUrl: './tab-work.component.scss'
})
export class TabWorkComponent {
  cities: City[] | undefined;
  selectedCity: City | undefined;
  visible: boolean = false;

  showAddCostumerData() {
      this.visible = true;
  }

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
}
