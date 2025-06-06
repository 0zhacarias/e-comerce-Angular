import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { BannerInformativoComponent } from "./components/banner-informativo/banner-informativo.component";
import { CarrocelProdutosComponent } from './components/carrocel-produtos/carrocel-produtos.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ButtonModule, CascadeSelectModule, FormsModule, HeaderComponent, 
        FooterComponent, ProdutosComponent, BannerInformativoComponent],
    standalone: true,

    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
    countries: any[] | undefined;

    selectedCity: any;
    title = 'e-comerces';
    ngOnInit() {
        this.countries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            { cname: 'Sydney', code: 'A-SY' },
                            { cname: 'Newcastle', code: 'A-NE' },
                            { cname: 'Wollongong', code: 'A-WO' }
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            { cname: 'Brisbane', code: 'A-BR' },
                            { cname: 'Townsville', code: 'A-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'Canada',
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            { cname: 'Montreal', code: 'C-MO' },
                            { cname: 'Quebec City', code: 'C-QU' }
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            { cname: 'Ottawa', code: 'C-OT' },
                            { cname: 'Toronto', code: 'C-TO' }
                        ]
                    }
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            { cname: 'Los Angeles', code: 'US-LA' },
                            { cname: 'San Diego', code: 'US-SD' },
                            { cname: 'San Francisco', code: 'US-SF' }
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            { cname: 'Jacksonville', code: 'US-JA' },
                            { cname: 'Miami', code: 'US-MI' },
                            { cname: 'Tampa', code: 'US-TA' },
                            { cname: 'Orlando', code: 'US-OR' }
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            { cname: 'Austin', code: 'US-AU' },
                            { cname: 'Dallas', code: 'US-DA' },
                            { cname: 'Houston', code: 'US-HO' }
                        ]
                    }
                ]
            }
        ];
    }
}
