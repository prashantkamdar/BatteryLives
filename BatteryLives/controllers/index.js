//controllers/index.js

(function (controllers) {
    
    var db = require("../db");

    controllers.init = function (app) {
        
        app.get("/", function (req, res) {
            res.render("index", {});
        });

        
        app.get("/api/getCategories", function (req, res) {
            db.getCategories(function (err, categories) {
                if (err) {
                    res.send(400, err);
                }
                else {
                    res.set("Content-Type", "application/json");
                    res.send(categories);
                }
            });
        });

        app.get("/api/getBrands", function (req, res) {
            db.getBrands(function (err, brands) {
                if (err) {
                    res.send(400, err);
                }
                else {
                    res.set("Content-Type", "application/json");
                    res.send(brands);
                }
            });
        });
    };

})(module.exports);