import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-header',
  imports: [MenubarModule, ButtonModule],

   templateUrl: './header.component.html',
  styleUrl: './header.component.css' 
})
export class HeaderComponent {
  items: MenubarModule[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Products', icon: 'pi pi-box', routerLink: '/products' },
      { label: 'Cart', icon: 'pi pi-shopping-cart', routerLink: '/cart' },
      { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' },
    ];
  }
}
