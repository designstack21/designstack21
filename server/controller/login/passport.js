 let passport = require('passport');
 const GoogleStrategy = require('passport-google-oauth20').Strategy;
 const LocalStrategy = require('passport-local').Strategy;
 const mongoose = require('mongoose');
 const User = mongoose.model('User');

 passport.serializeUser(function(user, done) {
     done(null, user);
 });

 passport.deserializeUser(function(user, done) {
     done(null, user);
 });

 passport.use(new GoogleStrategy({
         callbackURL: 'http://localhost:3000/auth/google/callback',
         clientID: '1021634967373-1ugnrhu2s16kom5nqhcp4lgtd57urne9.apps.googleusercontent.com',
         clientSecret: 'E7_MnGsR1xlAb2c_KShbTudI',
     },
     function(request, accessToken, refreshToken, profile, done) {
         process.nextTick(function() {
             User.findOne({
                 $or: [
                     { 'google.id': profile.id },
                     { 'email': profile.emails[0].value }
                 ]
             }, function(err, user) {
                 if (err) {
                     return done(err);
                 }
                 if (user) {
                     if (user.google.id == undefined) {
                         user.google.id = profile.id;
                         user.google.token = accessToken;
                         user.google.email = profile.emails[0].value;
                         user.firstName = profile.name.givenName;
                         user.lastName = profile.name.familyName;
                         user.profileImage = profile.photos[0].value.split('?')[0]
                         user.save();
                     }
                     return done(null, user);

                 } else {
                     console.log(profile);
                     let newUser = new User();
                     newUser.google.id = profile.id;
                     newUser.google.token = accessToken;
                     newUser.google.email = profile.emails[0].value;
                     newUser.firstName = profile.name.givenName;
                     newUser.lastName = profile.name.familyName;
                     newUser.email = profile.emails[0].value;
                     newUser.profileImage = profile.photos[0].value.split('?')[0]
                     newUser.save(err => {
                         if (err) {
                             console.log(err);
                             throw err;
                         }
                         return done(null, newUser);
                     });
                 }
             });
         });
     }
 ));



 passport.use(new LocalStrategy(
     function(username, password, done) {
         console.log('inside local statergy');
         console.log(username, password);
         User.findOne({ email: username }, function(err, user) {
             console.log('find user ');
             console.log(err, user);

             if (err) { return done(err); }
             if (!user) { return done(null, false); }
             if (!user.validPassword(password)) { return done(null, false); }
             return done(null, user);
         });
     }
 ));