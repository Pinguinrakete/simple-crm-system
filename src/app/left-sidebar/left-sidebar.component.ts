import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  items = [
    {
      routeLink: 'dashboard',
      icon: 'pi pi-th-large',
      label: 'Dashboard',
    },
    {
      routeLink: 'contactmanagement',
      icon: 'pi pi-users',
      label: 'User',
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

  isHovered = false;

  onHover(isHovered: boolean): void {
    this.isHovered = isHovered;
  }
  
  trackByIndex(index: number): number {
    return index;
  }

  isLeftSidebarCollapsed(): boolean {
    return false;
  }
}
