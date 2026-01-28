import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { CurrencyPipe } from "@angular/common";

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [
        RouterModule,
        CurrencyPipe,
        ReactiveFormsModule
    ],
    templateUrl: './cart.html',
    styleUrl: './cart.css',
})
export class Cart {
    // Inicializamos las propiedades directamente
    items = this.cartService.getItems();

    checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
    });

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder,
    ) { }

    onSubmit(): void {
        // Procesar datos de pago
        this.items = this.cartService.clearCart();
        console.warn('Your order has been submitted', this.checkoutForm.value);
        this.checkoutForm.reset();
    }
}