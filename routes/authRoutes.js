const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

router.get("/login", AuthController.pageLogin);
router.get("/register", AuthController.pageRegister);
router.post("/register", AuthController.register);

module.exports = router;
