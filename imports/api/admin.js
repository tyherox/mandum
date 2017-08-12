/**
 * Created by JohnBae on 8/10/17.
 */

import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    createAccount(email, pwd){
        if(Meteor.users.find().count()==1){
            return Accounts.createUser({email: email, password:pwd})!=null;
        }
        else{
            return false;
        }
    }
});

Meteor.methods({
    reset(){
        return Meteor.users.remove({});
    }
});