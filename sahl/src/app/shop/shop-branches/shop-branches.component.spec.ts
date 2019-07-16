import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBranchesComponent } from './shop-branches.component';

describe('ShopBranchesComponent', () => {
  let component: ShopBranchesComponent;
  let fixture: ComponentFixture<ShopBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
