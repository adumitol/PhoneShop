import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
    items: Product[] = [];

    constructor(
        private http: HttpClient
    ) {}

    addToCart(product: Product) {
        this.items.push(product)
        //Al añadir un producto al carrito, resta 1 el stock del producto
        product.cantidad = product.cantidad -1
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
    getShippingPrices() {
        return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
    }


}
