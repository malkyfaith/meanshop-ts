import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap';
const productsRoutes: Routes = [{
    path: 'products',
    component: ProductsComponent,
}]
@NgModule({
    imports: [
        RouterModule.forChild(productsRoutes),
        BrowserModule,
        FormsModule,
        TooltipModule.forRoot(),
    ],
    declarations: [
        ProductsComponent
    ],
    // providers: [
    //     ProductsService
    // ],
    exports: [
        ProductsComponent
    ]
})
export class ProductsModule { }