import { Component,HostBinding, inject } from '@angular/core';

import { CarrocelProdutosComponent } from "../carrocel-produtos/carrocel-produtos.component";
import { ButtonModule } from 'primeng/button';
import { ProdutoMesComponent } from "../../produto-mes/produto-mes.component";

@Component({
  selector: 'app-produtos',
  imports: [ButtonModule, CarrocelProdutosComponent, ProdutoMesComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',

})
export class ProdutosComponent {
 /*  ngOnInit() {
    // Initialize component logic here
  } */

}
