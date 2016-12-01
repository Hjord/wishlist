import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { WishlistComponent } from './wish/wishlist.component';
import { WishDetailsComponent } from './wish/wish-details.component';


export const routes: Route[] = [
    { path: '', component: WishlistComponent },
    { path: 'wish/:wishId', component: WishDetailsComponent, canActivate: ['canActivateForLoggedIn'] }
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !!Meteor.userId()
}]
