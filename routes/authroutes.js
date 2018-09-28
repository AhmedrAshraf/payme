const passport = require("passport");

module.exports = (app) => {

app.get("/auth/google/callback", passport.authenticate("google", {scope: 'https://www.googleapis.com/auth/plus.login'}));

  app.get("/", (req, res) => {
    res.send({hi: "there"});
  });

  app.get("/auth/google",
    passport.authenticate("google", {
    scope: ["profile", "email"]
    })
  );
  app.get("/api/current_user", (req, res) => {
    res.send(req.user)
  })
}
