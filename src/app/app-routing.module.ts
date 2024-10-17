import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { GasStovePageComponent } from './Pages/Services Pages/gas-stove-page/gas-stove-page.component';
import { ChimneyPageComponent } from './Pages/Services Pages/chimney-page/chimney-page.component';
import { HobPageComponent } from './Pages/Services Pages/hob-page/hob-page.component';
import { KitchenPageComponent } from './Pages/Services Pages/kitchen-page/kitchen-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent,pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  { path:'services/gas-stove',component:GasStovePageComponent},
  { path:'services/chimney',component:ChimneyPageComponent},
  { path:'services/hob',component:HobPageComponent},
  { path:'services/kitchen-cleaning',component:KitchenPageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
