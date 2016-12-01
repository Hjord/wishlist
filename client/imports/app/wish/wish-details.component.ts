import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';

import 'rxjs/add/operator/map';

import { Wishes } from '../../../../both/collections/wishes.collection';
import { Wish } from '../../../../both/models/wish.model';


import template from './wish-details.component.html';

@Component({
    selector: 'wish-details',
    template
})

export class WishDetailsComponent implements OnInit, OnDestroy {
    wishId: string;
    paramSub: Subscription;
    wish: Wish;

    constructor(
        private route: ActivatedRoute
    ) { }


    saveWish() {

        if (!Meteor.userId()) {
            alert("Please log in");
            return;
        }


        Wishes.update(this.wish._id, {
            $set: {
                name: this.wish.title,
                description: this.wish.description,
                location: this.wish.store
            }
        });
    }


    ngOnInit() {
        this.paramSub = this.route.params
            .map(params => params['wishId'])
            .subscribe(wishId => {
                this.wishId = wishId
                this.wish = Wishes.findOne(this.wishId);
            });
    }

    ngOnDestroy() {
        this.paramSub.unsubscribe();
    }
}
