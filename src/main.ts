import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter} from "@angular/router";
import routeConfig from "./app/routes";
import {provideHttpClient} from "@angular/common/http";

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routeConfig),
        provideHttpClient(),
    ]
}).catch((err) => console.error(err));


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/