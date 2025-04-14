import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos-novos',
  imports: [ButtonModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './produtos-novos.component.html',
  styleUrl: './produtos-novos.component.css'
})
export class ProdutosNovosComponent {
  isHovered = false;
  hoveredIndex = -1||null;
  value1: number = 1;
}
