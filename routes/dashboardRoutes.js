const express = require("express");
const router = express.Router();
const DashboardController = require("../controllers/DashboardController");

router.get("/edit", DashboardController.editData);
router.get("/", DashboardController.showDashboard);

module.exports = router;
