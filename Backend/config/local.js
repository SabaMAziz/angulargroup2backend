/*
Ready2Help
COMP299-SEC004
July-30-2022
local.js
*/

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
 const JWTStrategy = require('passport-jwt').Strategy;
const User = require('../models/user');

let config = require('./config');


module.exports = function() {
    console.log('===> LocalStrategy function')

    passport.use(
        'tokencheck',
        new JWTStrategy(
            {
                secretOrKey: config.SECRETKEY,
                jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
            },
            async (token, done) => {
                try {
                        console.log(token);
                        return done(null, token.payload);
                }catch (error){
                    console.log(error);
                    done(error);

                }
            }
        )
    );



    passport.use(
        'login', 
        new LocalStrategy((username, password, done)=>{
            User.findOne({username: username}, (err, user)=>{
                if (err) {
                    return done(err);
                }
                
                if (!user) {
                    return done(null, false, {
                        message: 'Unknown user'
                    });
                }
        
                if (!user.authenticate(password)) {
                    return done(null, false, {
                        message: 'Invalid password'
                    });
                }
                
                return done(null, user);
            });
        })
    );
};