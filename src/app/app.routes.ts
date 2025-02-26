import { Routes } from '@angular/router';
import { DashboardComponent } from './main/menu-content/dashboard/dashboard.component';
import  { ContactManagementComponent } from './main/menu-content/contact-management/contact-management.component';
import { ProductsComponent } from './main/menu-content/products/products.component';
import { SettingsComponent } from './main/menu-content/settings/settings.component';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'contactmanagement', component: ContactManagementComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'settings', component: SettingsComponent },
];
