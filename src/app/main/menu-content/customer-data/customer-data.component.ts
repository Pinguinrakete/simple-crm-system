import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-customer-data',
  standalone: true,
  imports: [ButtonModule, Dialog, SplitterModule, TabViewModule],
  templateUrl: './customer-data.component.html',
  styleUrl: './customer-data.component.scss'
})
export class CostumerDataComponent {
  visible: boolean = false;

  showAddCostumerData() {
      this.visible = true;
  }
}

