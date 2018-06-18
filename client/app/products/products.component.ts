import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
@Component({
    selector: 'products',
    template: require('./products.html')
})
export class ProductsComponent implements OnInit {
    productsService;
    products;

    constructor(productsService: ProductsService) { 
        this.productsService = productsService;
    }

    ngOnInit() {
        this.products = this.productsService.query();
    }

}