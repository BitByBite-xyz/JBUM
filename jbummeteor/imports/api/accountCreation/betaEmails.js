import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

BetaEmailSchema = new SimpleSchema({
    email_address: {
        type: String,
        label: "Poster's meteor.User ID",
    },
    accounts_left: {
        type: Number,
        label: "How many times the user can create an account",
        autoValue: function() {
            if ( this.isInsert ) {
                return 3;
            }
        }
    },
    createdAt: {
        type: Date,
        label: "Date email Added to System",
        autoValue: function() {
            if ( this.isInsert ) {
                return new Date;
            }
        }
    }
});

export const BetaEmails = new Mongo.Collection('beta_emails');

BetaEmails.attachSchema( BetaEmailSchema );
