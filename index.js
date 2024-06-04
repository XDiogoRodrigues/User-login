const express = require("express");
const app = express();
const conn = require("./db/conn");
const exphbs = require("express-handlebars");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const flash = require("express-flash");

// Imports Models
const Login = require("./models/Login");
const User = require("./models/User");
const Address = require("./models/Address");
const Course = require("./models/Course");
const Category = require("./models/Category");
const Order = require("./models/Order");

// Imports routes
const AuthRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  session({
    name: "session",
    secret: "nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new fileStore({
      logFn: function () {},
      path: require("path").join(require("os").tmpdir(), "sessions"),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true,
    },
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(flash());
app.use(express.static("public"));

app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }
  next();
});

app.use("/dashboard", dashboardRoutes);
app.use("/", AuthRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
    console.log("App funcionando na porta 3000");
  })
  .catch((err) => console.log("Erro:" + err));
