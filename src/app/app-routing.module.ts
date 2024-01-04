import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'products', component: ProductsComponent }, 
  { path: 'contact', component: ContactComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
