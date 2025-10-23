import { Component, Input } from '@angular/core';
import { Package } from '../package.model';
import { DropdownDirective } from "../../shared/dropdown.directive";
import { PackageService } from '../package.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-package-details',
  imports: [DropdownDirective, NgIf],
  templateUrl: './package-details.component.html',
  styleUrl: './package-details.component.css'
})
export class PackageDetailsComponent {

  @Input() packageSelected!: Package;
  isOpen: boolean = false;

  constructor(private packageService: PackageService) { }

  addToFoodList() {
    if (this.packageSelected) {
      this.packageService.addIngredientsToFoodList(this.packageSelected.ingredientes);
    }
  }
}
