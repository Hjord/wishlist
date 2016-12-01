import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import { Wishes } from '../../../../both/collections/wishes.collection';
import { Wish } from '../../../../both/models/wish.model'
import template from './wishlist.component.html';

@Component({
    selector: 'wishlist',
    template
})

export class WishlistComponent implements OnInit, OnDestroy {

    wishes: Observable<Wish[]>;
    wishesSub: Subscription;

    removeWish(wish: Wish): void {
        Wishes.remove(wish._id);
    }

    ngOnInit() {
        this.wishes = Wishes.find({}).zone();
        this.wishesSub = MeteorObservable.subscribe('wishes').subscribe();
    }

    ngOnDestroy() {
        this.wishesSub.unsubscribe();
    }


}
