import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';





import { PackageDetailsComponent } from './package-details/package-details.component';
import { PackageListComponent } from './package-list/package-list.component';
import { Package } from './package.model';
import { PackageService } from './package.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-packages',
  imports: [PackageDetailsComponent, PackageListComponent, RouterModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css',
  providers: [PackageService],
})
export class PackagesComponent implements OnInit, OnDestroy {
  selectedPackage!: Package;
  subscription: Subscription = new Subscription();
  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
    this.packageService.packageSelected.subscribe((selectedPackage: Package) => this.selectedPackage = selectedPackage);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }

}
