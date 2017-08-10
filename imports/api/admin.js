/**
 * Created by JohnBae on 8/10/17.
 */

import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    createAccount(email, pwd){
        return Accounts.createUser({email: email, password:pwd});
    }
});

Meteor.methods({
    reset(){
        return Meteor.users.remove({});
    }
});