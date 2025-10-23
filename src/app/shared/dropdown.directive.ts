import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
    standalone: true
})
export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    @HostListener('document:click', ['$event']) closeDropdown(event: Event) {
        if (!(<HTMLElement>event.target).closest('[appDropdown]')) {
            this.isOpen = false;
        }
    }
}