const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/user'); // Replace with your user model

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_CALLBACK, // Adjust for production
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Check if user already exists
                let existingUser = await User.findOne({ googleId: profile.id });

                if (existingUser) {
                    return done(null, existingUser);
                }

                // If user doesn't exist, create a new one
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

// Serialize user into the session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});

module.exports = passport;
