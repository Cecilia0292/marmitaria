import { Component, Input } from '@angular/core';
import { Package } from '../../package.model';
import { PackageService } from '../../package.service';

@Component({
  selector: 'app-package-item',
  imports: [],
  templateUrl: './package-item.component.html',
  styleUrl: './package-item.component.css'
})
export class PackageItemComponent {

  @Input() package!: Package;
  constructor(private packageService: PackageService) { }



  onSelected() {
    this.packageService.packageSelected.emit(this.package);
  }
}
