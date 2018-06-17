import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'products',
    template: require('./products.html'),
    // styles: [require('./products.css')],
})
export class ProductsComponent implements OnInit {
    message/*: string*/;

    static parameters = [];
    constructor() {
        this.message = 'hello';
    }


}
