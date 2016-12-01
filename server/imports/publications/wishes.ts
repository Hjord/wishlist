import { Meteor } from 'meteor/meteor';
import { Wishes } from '../../../both/collections/wishes.collection';

Meteor.publish('wishes', function() {


    //if public is true OR you are the owner AND the owner exists
    const selector = {

        $and: [{
            owner: this.userId
        },
        {
            owner: {
              $exists: true
                  }
        }]
    }

    return Wishes.find(selector);
});
