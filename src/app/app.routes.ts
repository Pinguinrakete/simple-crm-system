import { Routes } from '@angular/router';
import { DashboardComponent } from './main/menu-content/dashboard/dashboard.component';
import  { CostumerDataComponent } from './main/menu-content/customer-data/customer-data.component';
import { ProductsComponent } from './main/menu-content/products/products.component';
import { SettingsComponent } from './main/menu-content/settings/settings.component';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'customer-data', component: CostumerDataComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'settings', component: SettingsComponent },
];
