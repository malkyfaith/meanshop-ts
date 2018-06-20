import { Injectable, Inject, forwardRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ProductsService {
    productMocks = [
        { _id: 1, title: 'Product 1', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet' },
        { _id: 2, title: 'Product 2', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet' },
        { _id: 3, title: 'Product 3', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet' },
        { _id: 4, title: 'Product 4', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet' },
        { _id: 5, title: 'Product 5', price: 123.45, quantity: 10, description: 'Lorem ipsum dolor sit amet' }
    ]
    constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) {}
    public query(): Observable<any> {
        return this.http.get('/api/products');
        //return this.productMocks;
    }

    public get(id) {
        let currP = null;
        this.productMocks.forEach(p => {
            if(p._id == id) {
                currP = p;
            }
        })
        return currP;
    }

    public create(product) {
    }

    public delete(product) {

    }

    public edit(product) {
    }
}