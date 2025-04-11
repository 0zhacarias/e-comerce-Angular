import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-multi-opcoes-produtos',
  imports: [SelectButtonModule, ButtonModule, FormsModule,CommonModule,CardModule],
  templateUrl: './multi-opcoes-produtos.component.html',
  styleUrl: './multi-opcoes-produtos.component.css'
})
export class MultiOpcoesProdutosComponent {
  stateOptions: any[] = [
    { label: 'One-Way', value: 'one-way' },
     { label: 'Return', value: 'return' }, 
    { label: 'Eletrodomestico', value: 'domestico' },
     { label: 'Medicina', value: 'med' }
  ];

  value: string = 'one-way';
}
