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
    { label: 'Vestidos de mulher', value: 'vestido',image:"https://i.etsystatic.com/5824932/c/3000/2384/0/115/il/2b96d4/3533043549/il_600x600.3533043549_s40z.jpg" },
     { label: 'Canecas', value: 'canecas',image:"https://ae-pic-a1.aliexpress-media.com/kf/S7711cd595c0b4f6faf3d9106cd4bba05L.jpg_220x220q75.jpg_.avif" }, 
    { label: 'Eletrodomestico', value: 'domestico',image:"https://ae-pic-a1.aliexpress-media.com/kf/S2324fc5caf2145c6919e40618e69b78cR.jpg_220x220q75.jpg_.avif" },
     { label: 'Medicina', value: 'Medicina',image:"https://ae-pic-a1.aliexpress-media.com/kf/S35b1cdd766e94a1eaf8d594621a52803q.jpg_220x220q75.jpg_.avif" }
  ];

  value: string = 'vestido';
}
