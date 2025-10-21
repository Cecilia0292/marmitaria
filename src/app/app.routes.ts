import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageListComponent } from './packages/package-list/package-list.component';
import { PackageDetailsComponent } from './packages/package-details/package-details.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';
import { FoodListComponent } from './food-list/food-list.component';
import { PackagesDefaultComponent } from './packages/packages-default/packages-default.component';



export const routes: Routes = [
    { path: '', redirectTo: '/marmitas', pathMatch: 'full'},
    { path: 'marmitas', component: PackagesComponent, children: [
        {path: '', component: PackagesDefaultComponent},
        {path: ':id', component: PackageDetailsComponent}
    ]},
    { path: 'alimentos',component: FoodListComponent},

];
