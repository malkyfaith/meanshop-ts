import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { ProductsService } from './products.service';
@Component({
    selector: 'products',
    template: require('./product-list.html')
})
export class ProductsComponent implements OnInit {
    products;
    product;

    constructor(@Inject(forwardRef(() => ProductsService)) private productsService: ProductsService) {
    }

    ngOnInit() {
        this.products = this.productsService.query();
    }

    create() {

    }

    delete() {
        this.productsService.delete(this.product);
    }

}