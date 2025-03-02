import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { TabWorkComponent } from './add-new-user/tab-work/tab-work.component';
import { TabNotesComponent } from './add-new-user/tab-notes/tab-notes.component';

@Component({
  selector: 'app-customer-data',
  standalone: true,
  imports: [ButtonModule, Dialog, SplitterModule, TabViewModule, TabWorkComponent,TabNotesComponent],
  templateUrl: './customer-data.component.html',
  styleUrl: './customer-data.component.scss'
})
export class CostumerDataComponent {
  visible: boolean = false;

  showAddCostumerData() {
      this.visible = true;
  }
}

