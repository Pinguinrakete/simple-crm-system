import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-tab-work',
  imports: [ButtonModule, IconFieldModule, InputTextModule, InputIconModule, TextareaModule],
  templateUrl: './tab-work.component.html',
  styleUrl: './tab-work.component.scss'
})
export class TabWorkComponent {
  visible: boolean = false;

  showAddCostumerData() {
      this.visible = true;
  }
}
