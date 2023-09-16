const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const userModels = require("../model/userModel.js");


module.exports = function(passport){
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      let user;
      const newUser = {
        email: profile.emails[0].value,
        firstName : profile.name.givenName,
        lastName : profile.name.familyName,
        password:"happyTravelling"

    }

      try {
        let user = await userModels.findOne({email: profile.emails[0].value})
      //   const cookieOptions = {
      //     expires:new Date(
      //         Date.now()+ process.env.COOKIE_EXPIRE*24*60*60*1000
      //     ),
      //     httpOnly:true
      // }
      //   res.status(200).cookie("email",profile.emails[0].value,cookieOptions).json({
      //     success:true,
      // })
        if(user){
          // res.redirect("http://localhost:3000/TripPlanner");
          done(null,user)
        }else{
            user = await userModels.create(newUser);

            done(null,user)
        }
        console.log(profile);
      } catch (err) {
        console.log(err);
      }

    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
})
}
