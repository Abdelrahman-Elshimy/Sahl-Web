import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './incs/header/header.component';
import { FooterComponent } from './incs/footer/footer.component';
import { SidemenuComponent } from './incs/sidemenu/sidemenu.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { ShopItemsComponent } from './shop/shop-items/shop-items.component';
import { ShopOffersComponent } from './shop/shop-offers/shop-offers.component';
import { ShopLovesComponent } from './shop/shop-loves/shop-loves.component';
import { HeaderShopComponent } from './shop/incShop/header-shop/header-shop.component';
import { FooterShopComponent } from './shop/incShop/footer-shop/footer-shop.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { ShopBranchesComponent } from './shop/shop-branches/shop-branches.component';
import { SideShopComponent } from './shop/incShop/side-shop/side-shop.component';
import { AddProductComponent } from './shop/operation/add-product/add-product.component';
import { AddOfferComponent } from './shop/operation/add-offer/add-offer.component';
import { AddBranchComponent } from './shop/operation/add-branch/add-branch.component';
import { UpdateInfoComponent } from './shop/operation/update-info/update-info.component';
import { ItemComponent } from './main/item/item.component';
import { ItemsComponent } from './main/items/items.component';
import { ShopProfileComponent } from './main/shop-profile/shop-profile.component';
import { OffersComponent } from './main/offers/offers.component';
import { OfferComponent } from './main/offer/offer.component';
import { CatComponent } from './main/cat/cat.component';
import { ItemscatComponent } from './main/itemscat/itemscat.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    ContactComponent,
    ShopHomeComponent,
    ShopItemsComponent,
    ShopOffersComponent,
    ShopLovesComponent,
    HeaderShopComponent,
    FooterShopComponent,
    ShopBranchesComponent,
    SideShopComponent,
    AddProductComponent,
    AddOfferComponent,
    AddBranchComponent,
    UpdateInfoComponent,
    ItemComponent,
    ItemsComponent,
    ShopProfileComponent,
    OffersComponent,
    OfferComponent,
    CatComponent,
    ItemscatComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
