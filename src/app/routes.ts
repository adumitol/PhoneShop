import {ProductListComponent} from "./product-list/product-list.component";
import {Routes} from "@angular/router";
import {ProductDetailsComponent} from "./product-details/product-details";
import {Cart} from "./cart/cart";
import {Shipping} from "./shipping/shipping";
import { ProviderDetailsComponent } from './provider-details/provider-details';
import {ProviderListComponent} from "./provider-component";


const routeConfig: Routes = [
    {
        path: '',
        component: ProductListComponent,
        title: 'Home page'
    },
    {
        path: 'products/:productId',
        component: ProductDetailsComponent,
        title: 'Product details'
    },
    {
        path: 'cart',
        component: Cart,
        title: 'Checkout'
    },
    {
        path: 'shipping',
        component: Shipping,
        title: 'Shipping Prices'
    },
    // NUEVA RUTA
    {
        path: 'providers/:providerId',
        component: ProviderDetailsComponent,
        title: 'Provider Details'
    },
    {
        path: 'providers',
        component: ProviderListComponent,
        title: 'Proveedores y Productos'
    }
];

export default routeConfig;