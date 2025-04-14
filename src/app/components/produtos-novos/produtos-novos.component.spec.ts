import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosNovosComponent } from './produtos-novos.component';

describe('ProdutosNovosComponent', () => {
  let component: ProdutosNovosComponent;
  let fixture: ComponentFixture<ProdutosNovosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosNovosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosNovosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
