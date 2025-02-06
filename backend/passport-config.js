const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./models/user');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_CALLBACK,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {

                let existingUser = await User.findOne({ googleId: profile.id });

                if (existingUser) {
                    return done(null, existingUser);
                }


                const newUser = await User.create({
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    username: profile.displayName,
                });

                return done(null, newUser);
            } catch (error) {
                return done(error, false);
            }
        }
    )
);


passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_URI_CALLBACK,
    profileFields: ['id', 'emails', 'name']
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            let existingUser = await User.findOne({ facebookId: profile.id });

            if (existingUser) {
                return done(null, existingUser);
            }

            const newUser = await User.create({
                facebookId: profile.id,
                email: profile.emails[0].value,
                username: profile.displayName,
            });

            return done(null, newUser);
        } catch (error) {
            return done(error, false);
        };

    }));

passport.serializeUser((user, done) => {
        done(null, user.id);
    });

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});

module.exports = passport;
