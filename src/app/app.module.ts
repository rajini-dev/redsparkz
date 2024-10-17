import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
