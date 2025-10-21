import { Component} from '@angular/core';
import { PackageItemComponent } from "./package-item/package-item.component";
import { Package } from '../package.model';
import { CommonModule } from '@angular/common';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package-list',
  imports: [PackageItemComponent, CommonModule],
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.css'
})
export class PackageListComponent {

  packages?: Package[];


  constructor(
    private packageService: PackageService
  ) { }

  ngOnInit() {
    this.packages = this.packageService.getPackages();
  }

}
