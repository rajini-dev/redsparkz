import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { GasStovePageComponent } from './Pages/Services Pages/gas-stove-page/gas-stove-page.component';
import { ChimneyPageComponent } from './Pages/Services Pages/chimney-page/chimney-page.component';
import { HobPageComponent } from './Pages/Services Pages/hob-page/hob-page.component';
import { KitchenPageComponent } from './Pages/Services Pages/kitchen-page/kitchen-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { BlogPageComponent } from './Pages/blog-page/blog-page.component';
import { ProductsComponent } from './Pages/products/products.component';
import { BlogDetailComponent } from './Pages/blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent,
    data: { afterFooterContent: 'home-bottom-content' }, pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    data: { afterFooterContent: 'home-bottom-content' },

  },
  {
    path: 'gas-stove-service-chennai',
    component: GasStovePageComponent,
    data: { afterFooterContent: 'gasstove-bottom-content' },
  },
  {
    path: 'chimney-service-chennai',
    component: ChimneyPageComponent,
    data: { afterFooterContent: 'chimney-bottom-content' },
  },
  {
    path: 'hob-service-chennai',
    component: HobPageComponent,
    data: { afterFooterContent: 'hob-bottom-content' },
  },
  {
    path: 'kitchen-cleaning-service-chennai',
    component: KitchenPageComponent,
    data: { afterFooterContent: 'kitchen-bottom-content' },
  },
  {
    path: 'about-us',
    component: AboutPageComponent,
    data: { showExtraComponent: false },
  },
  {
    path: 'blog',
    component: BlogPageComponent,
    data: { showExtraComponent: false },
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
    data: { showExtraComponent: false },
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { showExtraComponent: false },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
