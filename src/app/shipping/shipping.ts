import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import {AsyncPipe, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-shipping',
    standalone: true,
    imports: [
        CurrencyPipe,
        AsyncPipe
    ],
  templateUrl: './shipping.html',
  styleUrl: './shipping.css',
})

export class Shipping implements OnInit {
    shippingCosts!: Observable<{ type: string, price: number }[]>;

    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.shippingCosts =  this.cartService.getShippingPrices();
    }
}
