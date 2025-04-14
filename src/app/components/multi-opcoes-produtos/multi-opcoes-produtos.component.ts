import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Carousel } from 'primeng/carousel';
 import { Categorias } from '../../domain/categoria';
 
@Component({
  selector: 'app-multi-opcoes-produtos',
  imports: [SelectButtonModule, ButtonModule, FormsModule,CommonModule,CardModule,Carousel],
  templateUrl: './multi-opcoes-produtos.component.html',
  styleUrl: './multi-opcoes-produtos.component.css'
})
export class MultiOpcoesProdutosComponent {
   TodasCategorias:Categorias[]= [
    { value: 'Roupas', label: 'Roupas',
      opcoes:[
        {
      designacao: 'vestido',
      image: "https://i.etsystatic.com/5824932/c/3000/2384/0/115/il/2b96d4/3533043549/il_600x600.3533043549_s40z.jpg",
      preco: 20.99,
      desconto: 0.00,

    },
        {
      designacao: 'vestido',
      image: "https://i.etsystatic.com/5824932/c/3000/2384/0/115/il/2b96d4/3533043549/il_600x600.3533043549_s40z.jpg",
      preco: 20.99,
      desconto: 0.00,

    },
        {
      designacao: 'vestido',
      image: "https://i.etsystatic.com/5824932/c/3000/2384/0/115/il/2b96d4/3533043549/il_600x600.3533043549_s40z.jpg",
      preco: 20.99,
      desconto: 0.00,

    },
        {
      designacao: 'vestido',
      image: "https://i.etsystatic.com/5824932/c/3000/2384/0/115/il/2b96d4/3533043549/il_600x600.3533043549_s40z.jpg",
      preco: 20.99,
      desconto: 0.00,

    },
  ] },
    { value: 'Eletronico', label: 'Eletrônicos',
      opcoes:[
        {
      designacao: 'Roteador 1',
      image: "https://ncrangola.vtexassets.com/arquivos/ids/162051-198-198?v=638730540068670000&width=198&height=198&aspect=true",
      preco: 20.99,
      desconto: 0.00,

    },
        {
      designacao: 'vestido',
      image: "https://ncrangola.vtexassets.com/arquivos/ids/163952-198-198?v=638749592330300000&width=198&height=198&aspect=true",
      preco: 20.99,
      desconto: 0.00,

    },
        {
      designacao: 'vestido',
      image: "https://ncrangola.vtexassets.com/arquivos/ids/163934-198-198?v=638749541611970000&width=198&height=198&aspect=true",
      preco: 20.99,
      desconto: 0.00,

    },
        {
      designacao: 'vestido',
      image: "https://ncrangola.vtexassets.com/arquivos/ids/160469-198-198?v=638687826281270000&width=198&height=198&aspect=true",
      preco: 20.99,
      desconto: 0.00,

    },
  
  ]  },
  ]; 
  
/*   TodasCategorias: any[] = [
    {
      value: 'Roupas',
      label: 'Roupas',
      opcoes: [
        {
          designacao: 'vestido',
          image: "https://i.etsystatic.com/5824932/c/3000/2384/0/115/il/2b96d4/3533043549/il_600x600.3533043549_s40z.jpg",
          preco: 20.99,
          desconto: 0.00,

        },
        { 
          designacao: 'Calsas',
          image: "https://ae-pic-a1.aliexpress-media.com/kf/S7711cd595c0b4f6faf3d9106cd4bba05L.jpg_220x220q75.jpg_.avif" ,
          preco: 20.99,
          desconto: 0.00,

        },
        {
          designacao: 'Sapatos',
          image: "https://ae-pic-a1.aliexpress-media.com/kf/S2324fc5caf2145c6919e40618e69b78cR.jpg_220x220q75.jpg_.avif",
          preco: 20.99,
          desconto: 0.00,

        },
        { 
          designacao: 'Socas',
          image: "https://ae-pic-a1.aliexpress-media.com/kf/S35b1cdd766e94a1eaf8d594621a52803q.jpg_220x220q75.jpg_.avif",
          preco: 20.99,
          desconto: 0.00,

        }
      ],
    },
    {
      value: 'Eletronico',
      label: 'Eletronicos',
      opcoes: [
        {
          designacao: 'Compotador',
          image: "https://i.etsystatic.com/5824932/c/3000/2384/0/115/il/2b96d4/3533043549/il_600x600.3533043549_s40z.jpg",
          preco: 1000000,
          desconto: 5000.00,

        },
        { 
          designacao: 'Mouse',
          image: "https://ae-pic-a1.aliexpress-media.com/kf/S7711cd595c0b4f6faf3d9106cd4bba05L.jpg_220x220q75.jpg_.avif",
          preco: 2000.99,
          desconto: 100.00,

        },
        {
          designacao: 'Teclados',
          image: "https://ae-pic-a1.aliexpress-media.com/kf/S2324fc5caf2145c6919e40618e69b78cR.jpg_220x220q75.jpg_.avif",
          preco: 20.99,
          desconto: 0.00,

        },
        { 
          designacao: 'Disco duro',
          image: "https://ae-pic-a1.aliexpress-media.com/kf/S35b1cdd766e94a1eaf8d594621a52803q.jpg_220x220q75.jpg_.avif",
          preco: 20.99,
          desconto: 0.00,

        }
      ],
    }

    ]; */

  value: string = 'Roupas';
  responsiveOptions: any[] | undefined;
  filtrarOpcoes: any[] = [];
    selecionarCategoria(): void {
    this.filtrarOpcoes = this.TodasCategorias.find(option => option.value == this.value)?.opcoes || [];
    console.log('Conteúdo atualizado:', this.filtrarOpcoes); // Debug para verificar o conteúdo

}

  ngOnInit() {
    this.selecionarCategoria();
  this.responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1,
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
    },
];}
}
