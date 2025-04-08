import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInformativoComponent } from './banner-informativo.component';

describe('BannerInformativoComponent', () => {
  let component: BannerInformativoComponent;
  let fixture: ComponentFixture<BannerInformativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerInformativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerInformativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
