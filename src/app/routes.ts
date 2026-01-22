import {ProductListComponent} from "./product-list/product-list.component";
import {Routes} from "@angular/router";
import {ProductDetailsComponent} from "./product-details/product-details";
import {Cart} from "./cart/cart";


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
    }];

export default routeConfig;