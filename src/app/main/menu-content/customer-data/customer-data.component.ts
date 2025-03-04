import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { TabOverviewComponent } from './add-new-user/tab-overview/tab-overview.component';
import { TabNameAndEmailComponent } from './add-new-user/tab-name-and-email/tab-name-and-email.component';
import { TabPrivateComponent } from './add-new-user/tab-private/tab-private.component';
import { TabWorkComponent } from './add-new-user/tab-work/tab-work.component';
import { TabNotesComponent } from './add-new-user/tab-notes/tab-notes.component';
import { TabFamilyComponent } from './add-new-user/tab-family/tab-family.component';

@Component({
  selector: 'app-customer-data',
  standalone: true,
  imports: [ButtonModule, Dialog, SplitterModule, TabViewModule, TabOverviewComponent,TabNameAndEmailComponent,TabPrivateComponent, TabWorkComponent, TabFamilyComponent, TabNotesComponent],
  templateUrl: './customer-data.component.html',
  styleUrl: './customer-data.component.scss'
})
export class CostumerDataComponent {
  visible: boolean = false;

  showAddCostumerData() {
      this.visible = true;
  }
}

