var path = require("path");


 function htmlRoutes(app) {

app.get("/notesData", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
};

module.exports = htmlRoutes; 