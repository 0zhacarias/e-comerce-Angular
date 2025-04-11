import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiOpcoesProdutosComponent } from './multi-opcoes-produtos.component';

describe('MultiOpcoesProdutosComponent', () => {
  let component: MultiOpcoesProdutosComponent;
  let fixture: ComponentFixture<MultiOpcoesProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiOpcoesProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiOpcoesProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
