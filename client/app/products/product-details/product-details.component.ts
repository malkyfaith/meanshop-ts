import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Component, Inject, forwardRef } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
    selector: 'product-details',
    template: require('./product-details.html')
})
export class ProductDetailsComponent {
    product = {};
    constructor(@Inject(forwardRef(() => ProductsService)) private productsService: ProductsService, @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute, @Inject(forwardRef(() => Router)) private router: Router) { }

    ngOnInit() {
        console.log(this.router);
        console.log(this.route);
        this.route.params.subscribe(params => {
            this.getProductDetail(params['id'])
        });

    }

    getProductDetail(id) {
        this.product = this.productsService.get(id);
    }

}