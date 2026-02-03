import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { products, Product } from '../products';

@Component({
    selector: 'app-provider-details',
    standalone: true,
    imports: [RouterModule],
    template: `
    <h2>Detalles del Proveedor</h2>
    
    @if (providerId) {
      <div>
        <p>ID del Proveedor: {{ providerId }}</p>
        
        <h3>Productos de este proveedor:</h3>
        <ul>
          @for (product of providerProducts; track product.id) {
            <li>
              <a [routerLink]="['/products', product.id]">{{ product.name }}</a>
            </li>
          }
        </ul>
      </div>
    }
  `
})
export class ProviderDetailsComponent implements OnInit {
    providerId: number | undefined;
    providerProducts: Product[] = [];

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        this.providerId = Number(routeParams.get('providerId'));
        this.providerProducts = products.filter(p => p.providerId === this.providerId);
    }
}