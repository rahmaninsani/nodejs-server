const { InfoModel, UserModel } = require("../models");
const fsReadFileHtml = require("../helpers/read-file");

class PageController {
  static home(req, res) {
    fsReadFileHtml("./views/index.html").then((html) => {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(html);
      res.end();
    });
  }

  static about(req, res) {
    fsReadFileHtml("./views/about.html").then((html) => {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(html);
      res.end();
    });
  }

  static info(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.write(
      JSON.stringify({
        code: res.statusCode,
        status: "OK",
        ...InfoModel,
      })
    );
    res.end();
  }

  static user(req, res) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.write(
      JSON.stringify({
        code: res.statusCode,
        status: "OK",
        data: UserModel,
      })
    );
    res.end();
  }

  static other(req, res) {
    fsReadFileHtml("./views/404.html").then((html) => {
      res.writeHead(404, {
        "Content-Type": "text/html",
      });
      res.write(html);
      res.end();
    });
  }
}

module.exports = PageController;
