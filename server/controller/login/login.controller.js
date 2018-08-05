let passport = require('passport');
const User = require('../../model/user.model');

let loginController = {
    isUserLogin: function(req, res) {
        return res.send(req.isAuthenticated());
    },
    googleLogin: function(req, res) {
        return passport.authenticate('google', { scope: ['profile', 'email'] })
    },
    googleResponce: function() {
        console.log('gooogle calback')
        return passport.authenticate('google', { failureRedirect: '/login', successRedirect: '/dashboard' });
    },
    signUp: async function(req, res) {
        console.log('hi1')
        let user = await User.findOne({ 'email': req.body.email }).exec();
        if (user) {
            return res.send('This email is already registered');
        }
        console.log('2')

        let newUser = new User();
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.phone = req.body.phoneNo;
        newUser.email = req.body.email;
        newUser.setPassword(req.body.password);
        await newUser.save(err => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            return res.redirect(`./login?username=${req.body.email}&password=${req.body.password}`)
        });

    },
    login: function() {
        return passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/auth/redirecto?url=dashboard' });
    },
    redirecto: function(req, res) {
        return res.status(302).send({ url: req.query.url });
    }
}
module.exports = loginController;