import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOffersComponent } from './shop-offers.component';

describe('ShopOffersComponent', () => {
  let component: ShopOffersComponent;
  let fixture: ComponentFixture<ShopOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
