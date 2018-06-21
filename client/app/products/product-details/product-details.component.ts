import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Component, Inject, forwardRef } from '@angular/core';
import { ProductsService } from '../products.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'product-details',
    template: require('./product-details.html')
})
export class ProductDetailsComponent {
    product$ = {};
    constructor( @Inject(forwardRef(() => ProductsService)) private productsService: ProductsService, @Inject(forwardRef(() => ActivatedRoute)) private route: ActivatedRoute, @Inject(forwardRef(() => Router)) private router: Router,
    @Inject(forwardRef(() => ToastrService)) private toastr: ToastrService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.getProductDetail(params['id'])
        });

    }

    getProductDetail(id) {
        this.product$ = this.productsService.get(id);
    }

    deleteProduct(productId) {
        this.productsService.delete(productId).subscribe(() => {
            this.toastr.success('The product has been successfully deleted.', 'Delete', { timeOut: 3000 });
            this.router.navigate(['/products']);
        }, err => {

        });
    }


}