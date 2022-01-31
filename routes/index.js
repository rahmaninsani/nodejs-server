const url = require("url");
const PageController = require("../controllers/PageController");

const routes = (req, res) => {
  const parsedURL = url.parse(req.url, true);

  switch (parsedURL.path) {
    case "/": {
      PageController.home(req, res);
      break;
    }
    case "/about": {
      PageController.about(req, res);
      break;
    }
    case "/info": {
      PageController.info(req, res);
      break;
    }
    case "/user": {
      PageController.user(req, res);
      break;
    }
    default:
      PageController.other(req, res);
  }
};

module.exports = routes;
