import { AfterViewInit, Component, ViewChild  } from '@angular/core';
import { Product } from '../../domain/produtos';
import { ProdutosserviceService } from '../../service/produtosservice.service';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Tag } from 'primeng/tag';
@Component({
  selector: 'app-carrocel-produtos',
  imports: [Carousel, ButtonModule, Tag,CardModule],
  templateUrl: './carrocel-produtos.component.html',
  styleUrl: './carrocel-produtos.component.css',
  providers: [ProdutosserviceService]

})
export class CarrocelProdutosComponent {
  products: Product[]=[];

  responsiveOptions: any[] | undefined;

  constructor(private ProdutosserviceService: ProdutosserviceService) {}

  
    ngOnInit() {
    this.ProdutosserviceService.getProductsSmall().then((products) => {
      
      this.products = products ||[];
    });


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
    ];
}

}
