import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
const productsRoutes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent }
]
export const routing = RouterModule.forChild(productsRoutes);
@NgModule({
    imports: [
        routing,
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        ProductsComponent,
        ProductDetailsComponent
    ],
    providers: [
        ProductsService
    ]
})
export class ProductsModule { }