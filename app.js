const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const LdapStrategy = require("passport-ldapauth");
const fs = require("fs");

const OPTS = {
  server: {
    url: "ldaps://ld0620.sit.kmutt.ac.th/",
    bindDN: "ou=People,ou=st,dc=sit,dc=kmutt,dc=ac,dc=th",
    bindCredentials: "secret",
    searchBase: "dc=sit,dc=kmutt,dc=ac,dc=th",
    searchFilter: "(&(uid={{username}})(password={{password}}))",
    tlsOptions: {
      ca: [fs.readFileSync("./cacert.pem")],
    },
  },
};
passport.use(new LdapStrategy(OPTS));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

const users = require("./src/routes/users");

app.use(users);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listen on ${port}`);
});
