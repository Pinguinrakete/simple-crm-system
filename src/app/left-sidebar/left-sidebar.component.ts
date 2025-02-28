import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  hoveredItem: any = null;

  items = [
    {
      routeLink: 'dashboard',
      icon: 'pi pi-th-large',
      label: 'Dashboard',
    },
    {
      routeLink: 'customer-data',
      icon: 'pi pi-users',
      label: 'Customer',
    },  
    {
      routeLink: 'products',
      icon: 'pi pi-warehouse',
      label: 'Products',
    },
    {
      routeLink: 'settings',
      icon: 'pi pi-cog',
      label: 'Settings',
    },
  ];

  onHover(item: any, isHovered: boolean): void {
    this.hoveredItem = isHovered ? item : null;
  }
  
  trackByIndex(index: number): number {
    return index;
  }

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }
}