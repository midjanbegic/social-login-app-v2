const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "283612315248-baged1dt09mkkt8edlvq1f09mgcfmajd.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "ef4784fce5664ef57b19";
GITHUB_CLIENT_SECRET = "ed96bc0b7374960fdd432ebd4fc5203bff835728";

FACEBOOK_APP_ID = "634859457962392";
FACEBOOK_APP_SECRET = "a8d3eee7373b90a4704f3f32f8e2c8c4";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
