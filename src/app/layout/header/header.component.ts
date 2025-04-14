import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [MenubarModule, ButtonModule,MegaMenu,CommonModule],

   templateUrl: './header.component.html',
  styleUrl: './header.component.css' 
})
export class HeaderComponent {
 // items: MenubarModule[] = [];
  MenusItems: MegaMenuItem[] = [];
  showMenu = false;

  toggleMenu(state: boolean) {
    this.showMenu = state;
  }
  ngOnInit() {
  /*   this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Products', icon: 'pi pi-box', routerLink: '/products' },
      { label: 'Cart', icon: 'pi pi-shopping-cart', routerLink: '/cart' },
      { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' },
    ]; */
    this.MenusItems = [
      {
          label: 'Furniture',
          icon: 'pi pi-box',
          items: [
              [
                  {
                      label: 'Living Room',
                      items: [
                          { label: 'Accessories' },
                          { label: 'Armchair' },
                          { label: 'Coffee Table' },
                          { label: 'Couch' },
                          { label: 'TV Stand' },
                      ],
                  },
              ],
              [
                  {
                      label: 'Kitchen',
                      items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }],
                  },
                  {
                      label: 'Bathroom',
                      items: [{ label: 'Accessories' }],
                  },
              ],
              [
                  {
                      label: 'Bedroom',
                      items: [
                          { label: 'Bed' },
                          { label: 'Chaise lounge' },
                          { label: 'Cupboard' },
                          { label: 'Dresser' },
                          { label: 'Wardrobe' },
                      ],
                  },
              ],
              [
                  {
                      label: 'Office',
                      items: [
                          { label: 'Bookcase' },
                          { label: 'Cabinet' },
                          { label: 'Chair' },
                          { label: 'Desk' },
                          { label: 'Executive Chair' },
                      ],
                  },
              ],
          ],
      },
      {
          label: 'Electronics',
          icon: 'pi pi-mobile',
          items: [
              [
                  {
                      label: 'Computer',
                      items: [
                          { label: 'Monitor' },
                          { label: 'Mouse' },
                          { label: 'Notebook' },
                          { label: 'Keyboard' },
                          { label: 'Printer' },
                          { label: 'Storage' },
                      ],
                  },
              ],
              [
                  {
                      label: 'Home Theater',
                      items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
                  },
              ],
              [
                  {
                      label: 'Gaming',
                      items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }],
                  },
              ],
              [
                  {
                      label: 'Appliances',
                      items: [
                          { label: 'Coffee Machine' },
                          { label: 'Fridge' },
                          { label: 'Oven' },
                          { label: 'Vaccum Cleaner' },
                          { label: 'Washing Machine' },
                      ],
                  },
              ],
          ],
      },
      {
          label: 'Sports',
          icon: 'pi pi-clock',
          items: [
              [
                  {
                      label: 'Football',
                      items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
                  },
              ],
              [
                  {
                      label: 'Running',
                      items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
                  },
              ],
              [
                  {
                      label: 'Swimming',
                      items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
                  },
              ],
              [
                  {
                      label: 'Tennis',
                      items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
                  },
              ],
          ],
      },
  ];
  }
}
