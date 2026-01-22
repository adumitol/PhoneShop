import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import { CartService } from '../cart.service';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-cart',
    standalone: true,
    imports: [RouterModule, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
    items = this.cartService.getItems();

    constructor(
        private cartService: CartService
    ) { }
}
