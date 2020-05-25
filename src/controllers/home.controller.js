let _homeService = null;

//Esta clase no va necesitar nada porque awilix le va inyectar lo que necesite
class HomeController {
  constructor({ HomeService }) {
    _homeService = HomeService;
  }

  index(req, res) {
    return res.send(_homeService.index());
  }
}

module.exports = HomeController;
