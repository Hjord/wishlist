import { Wishes } from '../../../both/collections/wishes.collection';
import { Wish } from '../../../both/models/wish.model';

export function loadWishes() {
    if (Wishes.find().cursor.count() === 0) {
        const wishes = [{
            title: 'Bicycle',
            description: 'A red one!',
            store: 'Bilka'
        },
            {
                title: 'Pan',
                description: '',
                store: 'Whereever'
            }];

        wishes.forEach((wish: Wish) => Wishes.insert(wish));
    }
}
