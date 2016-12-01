import { MongoObservable } from 'meteor-rxjs';
import { Wish } from '../models/wish.model';

export const Wishes = new MongoObservable.Collection<Wish>('wish');

function loggedIn() {
    return !!Meteor.user();
}

Wishes.allow({
  insert : loggedIn,
  update : loggedIn,
  remove : loggedIn
});
