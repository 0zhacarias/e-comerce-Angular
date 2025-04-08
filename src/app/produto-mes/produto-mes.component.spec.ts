import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoMesComponent } from './produto-mes.component';

describe('ProdutoMesComponent', () => {
  let component: ProdutoMesComponent;
  let fixture: ComponentFixture<ProdutoMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoMesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
