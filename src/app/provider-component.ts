import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { products } from './products';

@Component({
    selector: 'app-provider-list',
    standalone: true,
    imports: [RouterModule],
    template: `
    <h2>Nuestros Proveedores</h2>
    
    <div class="providers-container">
      <section style="margin-bottom: 20px; padding: 10px; border: 1px solid #eee;">
        <h3>Global Tech</h3>
        <p>Productos disponibles:</p>
        <ul>
          @for (product of getProductsByProvider(101); track product.id) {
            <li>
              <a [routerLink]="['/products', product.id]">{{ product.name }}</a>
            </li>
          }
        </ul>
      </section>

      <section style="margin-bottom: 20px; padding: 10px; border: 1px solid #eee;">
        <h3>Compact Solutions</h3>
        <p>Productos disponibles:</p>
        <ul>
          @for (product of getProductsByProvider(102); track product.id) {
            <li>
              <a [routerLink]="['/products', product.id]">{{ product.name }}</a>
            </li>
          }
        </ul>
      </section>
    </div>
    
    <a routerLink="/" class="button">Volver a la tienda</a>
  `
})
export class ProviderListComponent {
    // Filtra los productos según el ID del proveedor definido en el ejercicio
    getProductsByProvider(id: number) {
        return products.filter(p => p.providerId === id);
    }
}