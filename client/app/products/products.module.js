import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';

export const ROUTES/*: Routes*/ = [
    { path: 'products', component: ProductsComponent },
];


@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
    ],
    declarations: [
        ProductsComponent,
    ],
    exports: [
        ProductsComponent,
    ],
})
export class ProductsModule {}
