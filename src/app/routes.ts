import {ProductListComponent} from "./product-list/product-list.component";
import {Routes} from "@angular/router";
import {ProductDetailsComponent} from "./product-details/product-details";
import {Cart} from "./cart/cart";
import {Shipping} from "./shipping/shipping";


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
    { path: 'shipping',
        component: Shipping,
        title: 'Shipping Prices'
    }];

export default routeConfig;