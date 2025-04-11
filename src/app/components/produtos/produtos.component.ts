import { Component,HostBinding, inject,OnInit } from '@angular/core';

import { CarrocelProdutosComponent } from "../carrocel-produtos/carrocel-produtos.component";
import { ButtonModule } from 'primeng/button';
import { ProdutoMesComponent } from "../../produto-mes/produto-mes.component";
import { CommonModule } from '@angular/common';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { MultiOpcoesProdutosComponent } from '../multi-opcoes-produtos/multi-opcoes-produtos.component';

@Component({
  selector: 'app-produtos',
  imports: [ButtonModule, CarrocelProdutosComponent, ProdutoMesComponent,CommonModule,DividerModule, FormsModule,ReactiveFormsModule,MultiOpcoesProdutosComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',

})
export class ProdutosComponent  implements OnInit {
  isHovered = false;
  hoveredIndex = -1||null;
  value1: number = 1;
  formGroup!: FormGroup;

  ngOnInit() {
      this.formGroup = new FormGroup({
          value: new FormControl(1234)
      });
  }

}
