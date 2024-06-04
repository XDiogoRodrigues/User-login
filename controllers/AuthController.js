const bcrypt = require("bcryptjs");
const Login = require("../models/Login");
const User = require("../models/User");

module.exports = class AuthController {
  static pageLogin(req, res) {
    res.render("auth/login");
  }
  static pageRegister(req, res) {
    res.render("auth/register");
  }

  static async register(req, res) {
    const { email, password, confirmPassword } = req.body;

    if (password != confirmPassword) {
      req.flash("message", "As senhas não conferem, tente novamente!");
      res.render("auth/register");
      return;
    }

    const emailExists = await Login.findOne({ where: { email: email } });

    if (emailExists) {
      req.flash("message", "Email já cadastrado!");
      res.render("auth/register");
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const login = {
      email: email,
      password: hashPassword,
    };

    try {
      const createLogin = await Login.create(login);
      const user = {
        name: "",
        surname: "",
        birthday: "",
        LoginId: createLogin.id,
      };
      User.create(user);
      req.session.userid = createLogin.id;
      req.flash("message", "Cadastrado realizado com sucesso!");
      req.session.save(() => {
        res.render("dashboard/dashboardhome");
      });
    } catch (err) {
      console.log(err);
    }
  }
};
