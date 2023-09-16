const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// passport js login code
router.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: False,
      message: "Failed to login",
    });
  });

  router.get("/login/success", async (req, res) => {
    if (req.user) {
       console.log(req.user.avatar)
    }
    // res.status(200).json({})
    res.redirect("http://localhost:3000/TripPlanner");
  });
  
  router.get("/logout", (req, res) => {
    
    req.logout();
    res.redirect("http://localhost:3000/");
  });
  
  router.get(
    "/google",
     passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
      accessType: "offline",
      approvalPrompt: "force",
    }
    
    )
  );
  
  router.get(
    "/google/callback",
    passport.authenticate('google', {
      successRedirect: "/auth/login/success",
      failureRedirect: "/auth/login/failed",
    })
  );
  
  module.exports = router;  