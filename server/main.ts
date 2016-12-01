import { Meteor } from 'meteor/meteor';

import { loadWishes } from './imports/fixtures/wishes';
import './imports/publications/wishes';

Meteor.startup(() => {
    loadWishes();
})
