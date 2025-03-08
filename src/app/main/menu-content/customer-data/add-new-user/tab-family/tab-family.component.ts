import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';

import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-tab-family',
  imports: [ButtonModule, DatePickerModule, IconFieldModule, InputTextModule, InputIconModule, TextareaModule],
  templateUrl: './tab-family.component.html',
  styleUrl: './tab-family.component.scss'
})
export class TabFamilyComponent {
  visible: boolean = false;
}
