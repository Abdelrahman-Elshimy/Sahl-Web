import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLovesComponent } from './shop-loves.component';

describe('ShopLovesComponent', () => {
  let component: ShopLovesComponent;
  let fixture: ComponentFixture<ShopLovesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopLovesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopLovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
