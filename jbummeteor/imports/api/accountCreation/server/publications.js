import { Meteor } from 'meteor/meteor';
import { BetaEmails } from '../betaEmails';
import { publishComposite } from 'meteor/reywood:publish-composite';


Meteor.publish('BetaEmails.pub.list', () => {
    return BetaEmails.find();
});
