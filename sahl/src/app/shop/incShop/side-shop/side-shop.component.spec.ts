import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideShopComponent } from './side-shop.component';

describe('SideShopComponent', () => {
  let component: SideShopComponent;
  let fixture: ComponentFixture<SideShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
