import { Component, Input } from '@angular/core';
import { Package } from '../package.model';
import { DropdownDirective } from "../../shared/dropdown.directive";
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package-details',
  imports: [DropdownDirective],
  templateUrl: './package-details.component.html',
  styleUrl: './package-details.component.css'
})
export class PackageDetailsComponent {

    @Input() packageSelected!: Package;

    constructor(private packageService: PackageService) { }

    addToFoodList() {
      this.packageService.addIngredientsToFoodList(this.packageSelected.ingredientes);
    }
}
