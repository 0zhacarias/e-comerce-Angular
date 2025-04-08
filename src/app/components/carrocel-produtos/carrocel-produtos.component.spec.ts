import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocelProdutosComponent } from './carrocel-produtos.component';

describe('CarrocelProdutosComponent', () => {
  let component: CarrocelProdutosComponent;
  let fixture: ComponentFixture<CarrocelProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrocelProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrocelProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
