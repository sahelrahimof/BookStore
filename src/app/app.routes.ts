import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/+public/home/home.component';
import { LoginComponent } from './+pages/+public/login/login.component';
import { BasketComponent } from './+pages/+public/basket/basket.component';
import { AboutComponent } from './+pages/+public/about/about.component';
import { ProductssComponent } from './+pages/+public/productss/productss.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'productss',component:ProductssComponent},
    {path:'basket',component:BasketComponent},
    {path:'about',component:AboutComponent}
];
