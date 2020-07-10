import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyCartComponent } from './my-cart/my-cart.component';

const routes:Routes =
[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path:'main',component:HomepageComponent},
    {path:'product-detail',component:ProductDetailsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'mycart',component:MyCartComponent}



];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
