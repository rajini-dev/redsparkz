import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatStepperModule} from '@angular/material/stepper';

import { MatListModule } from '@angular/material/list';

import { MatExpansionModule } from '@angular/material/expansion';


import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MainHeaderComponent } from './Components/main-header/main-header.component';
import { MainFooterComponent } from './Components/main-footer/main-footer.component';
import { SideNavigationComponent } from './Components/side-navigation/side-navigation.component';
import { LandingScreenComponent } from './Components/home-components/landing-screen/landing-screen.component';
import { ServicesListComponent } from './Components/home-components/services-list/services-list.component';
import { ChimneyServiceComponent } from './Components/home-components/chimney-service/chimney-service.component';
import { WarrantyCardPopupComponent } from './Components/warranty-card-popup/warranty-card-popup.component';
import { WhatsappCallnowComponent } from './Components/whatsapp-callnow/whatsapp-callnow.component';
import { WarrantyButtonComponent } from './Components/warranty-button/warranty-button.component';
import { HorizontalLineComponent } from './Components/horizontal-line/horizontal-line.component';
import { GasStoveServiceComponent } from './Components/home-components/gas-stove-service/gas-stove-service.component';
import { GasStovePageComponent } from './Pages/Services Pages/gas-stove-page/gas-stove-page.component';
import { ChimneyPageComponent } from './Pages/Services Pages/chimney-page/chimney-page.component';
import { HobPageComponent } from './Pages/Services Pages/hob-page/hob-page.component';
import { KitchenPageComponent } from './Pages/Services Pages/kitchen-page/kitchen-page.component';
import { WhyChooseUsComponent } from './Components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { HobServiceComponent } from './Components/home-components/hob-service/hob-service.component';
import { ChimneyServiceDetailComponent } from './Components/dialog-boxes/chimney-service-detail-dialog/chimney-service-detail.component';
import { GasstoveServiceDetailDialogComponent } from './Components/dialog-boxes/gasstove-service-detail-dialog/gasstove-service-detail-dialog.component';
import { HobServiceDetailDialogComponent } from './Components/dialog-boxes/hob-service-detail-dialog/hob-service-detail-dialog.component';
import { KitchenServiceComponent } from './Components/home-components/kitchen-service/kitchen-service.component';
import { KitchenServiceDetailDialogComponent } from './Components/dialog-boxes/kitchen-service-detail-dialog/kitchen-service-detail-dialog.component';
import { TermsComponent } from './Components/terms/terms.component';
import { KitchenComponent } from './Components/Charges-tables-components/kitchen-charges/kitchen-charges.component';
import { KitchenCleaningGalleryComponent } from './Components/Gallery-components/kitchen-cleaning-gallery/kitchen-cleaning-gallery.component';
import { ChimneyChargesComponent } from './Components/Charges-tables-components/chimney-charges/chimney-charges.component';
import { HobChargesComponent } from './Components/Charges-tables-components/hob-charges/hob-charges.component';
import { GasStoveChargesComponent } from './Components/Charges-tables-components/gas-stove-charges/gas-stove-charges.component';
import { GasStoveGalleryComponent } from './Components/Gallery-components/gas-stove-gallery/gas-stove-gallery.component';
import { HobGalleryComponent } from './Components/Gallery-components/hob-gallery/hob-gallery.component';
import { ChimneyGalleryComponent } from './Components/Gallery-components/chimney-gallery/chimney-gallery.component';
import { FaqChimneyComponent } from './Components/Faq-components/faq-chimney/faq-chimney.component';
import { FaqHobComponent } from './Components/Faq-components/faq-hob/faq-hob.component';
import { FaqKitchenComponent } from './Components/Faq-components/faq-kitchen/faq-kitchen.component';
import { FaqGasStoveComponent } from './Components/Faq-components/faq-gas-stove/faq-gas-stove.component';
import { ComboServicePackComponent } from './Components/home-components/combo-service-pack/combo-service-pack.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ProductsComponent } from './Pages/products/products.component';
import { BlogPageComponent } from './Pages/blog-page/blog-page.component';
import { MiniWhyChooseUsComponent } from './Components/mini-why-choose-us/mini-why-choose-us.component';
import { ChimneyReviewComponent } from './Components/Review-components/chimney-review/chimney-review.component';
import { BannerComponent } from './Components/home-components/banner/banner.component';
import { OurTopServicesComponent } from './Components/home-components/our-top-services/our-top-services.component';
import { WhyMaintenanceComponent } from './Components/home-components/why-maintenance/why-maintenance.component';
import { ServiceLocationsComponent } from './Components/home-components/service-locations/service-locations.component';
import { HomeFaqComponent } from './Components/Faq-components/home-faq/home-faq.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainHeaderComponent,
    MainFooterComponent,
    SideNavigationComponent,
    LandingScreenComponent,
    ServicesListComponent,
    ChimneyServiceComponent,
    WarrantyCardPopupComponent,
    WhatsappCallnowComponent,
    WarrantyButtonComponent,
    HorizontalLineComponent,
    GasStoveServiceComponent,
    GasStovePageComponent,
    ChimneyPageComponent,
    HobPageComponent,
    KitchenPageComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    HobServiceComponent,
    ChimneyServiceDetailComponent,
    GasstoveServiceDetailDialogComponent,
    HobServiceDetailDialogComponent,
    KitchenServiceComponent,
    KitchenServiceDetailDialogComponent,
    TermsComponent,
    KitchenComponent,
    KitchenCleaningGalleryComponent,
    ChimneyChargesComponent,
    HobChargesComponent,
    GasStoveChargesComponent,
    GasStoveGalleryComponent,
    HobGalleryComponent,
    ChimneyGalleryComponent,
    FaqChimneyComponent,
    FaqHobComponent,
    FaqKitchenComponent,
    FaqGasStoveComponent,
    ComboServicePackComponent,
    AboutPageComponent,
    ProductsComponent,
    BlogPageComponent,
    MiniWhyChooseUsComponent,
    ChimneyReviewComponent,
    BannerComponent,
    OurTopServicesComponent,
    WhyMaintenanceComponent,
    ServiceLocationsComponent,
    HomeFaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    SlickCarouselModule,
    CarouselModule,
    MatListModule,
    MatExpansionModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
