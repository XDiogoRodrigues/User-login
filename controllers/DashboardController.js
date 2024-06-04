module.exports = class DashboardController {
  static showDashboard(req, res) {
    res.render("dashboard/dashboardhome");
  }
  static editData(req, res) {}
};
