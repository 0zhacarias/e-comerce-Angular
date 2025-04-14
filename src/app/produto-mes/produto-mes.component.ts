import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
@Component({
  selector: 'app-produto-mes',
  imports: [ButtonModule,CommonModule,RippleModule],
  templateUrl: './produto-mes.component.html',
  styleUrl: './produto-mes.component.css'
})
export class ProdutoMesComponent {
  isHovered = false;
  hoveredIndex = -1||null;
}
