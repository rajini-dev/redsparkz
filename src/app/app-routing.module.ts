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
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'gas-stove-service-chennai', component: GasStovePageComponent },
  { path: 'chimney-service-chennai', component: ChimneyPageComponent },
  { path: 'hob-service-chennai', component: HobPageComponent },
  { path: 'kitchen-cleaning-service-chennai', component: KitchenPageComponent },
  { path: 'about-us', component: AboutPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
