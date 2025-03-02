import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-tab-private',
  imports: [ButtonModule, IconFieldModule, InputTextModule, InputIconModule, TextareaModule],
  templateUrl: './tab-private.component.html',
  styleUrl: './tab-private.component.scss'
})
export class TabPrivateComponent {
  visible: boolean = false;

  showAddCostumerData() {
      this.visible = true;
  }
}
