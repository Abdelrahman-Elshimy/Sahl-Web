import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ShopHomeComponent } from '../shop/shop-home/shop-home.component';
import { ShopItemsComponent } from '../shop/shop-items/shop-items.component';
import { ShopLovesComponent } from '../shop/shop-loves/shop-loves.component';
import { ShopOffersComponent } from '../shop/shop-offers/shop-offers.component';
import { ShopBranchesComponent } from '../shop/shop-branches/shop-branches.component';
import { AddProductComponent } from '../shop/operation/add-product/add-product.component';
import { AddOfferComponent } from '../shop/operation/add-offer/add-offer.component';
import { AddBranchComponent } from '../shop/operation/add-branch/add-branch.component';
import { UpdateInfoComponent } from '../shop/operation/update-info/update-info.component';
import { ItemsComponent } from '../main/items/items.component';
import { ItemComponent } from '../main/item/item.component';
import { OffersComponent } from '../main/offers/offers.component';
import { OfferComponent } from '../main/offer/offer.component';
import { ShopProfileComponent } from '../main/shop-profile/shop-profile.component';
import { CatComponent } from '../main/cat/cat.component';
import { ItemscatComponent } from '../main/itemscat/itemscat.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'shop', component: ShopHomeComponent},
    {path: 'shop-products', component: ShopItemsComponent},
    {path: 'shop-loves', component: ShopLovesComponent},
    {path: 'shop-offers', component: ShopOffersComponent},
    {path: 'shop-branches', component: ShopBranchesComponent},
    {path: 'shop/add-product', component: AddProductComponent},
    {path: 'shop/add-offer', component: AddOfferComponent},
    {path: 'shop/add-branch', component: AddBranchComponent},
    {path: 'shop/update-information', component: UpdateInfoComponent},
    {path: 'items', component: ItemsComponent},
    {path: 'item/:id', component: ItemComponent},
    {path: 'offers', component: OffersComponent},
    {path: 'offer/:id', component: OfferComponent},
    {path: 'shop-profile/:id', component: ShopProfileComponent},
    {path: 'category/clothes', component: CatComponent},
    {path: 'items/clothes', component: ItemscatComponent}
  ];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

} 