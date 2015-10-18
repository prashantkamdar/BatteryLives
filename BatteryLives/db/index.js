//db/index.js

var mongodb = require("mongodb");
var mongourl = "mongodb://localhost:27017/BatteryLives";
var BatteryLivesDB = null;

(function (db) {
    
    db.getDB = function (next) {
        if (!BatteryLivesDB) {
            mongodb.MongoClient.connect(mongourl, function (err, db) {
                if (err) {
                    next(err, null);
                }
                else {
                    BatteryLivesDB = {
                        db: db,
                        BatteryLives: db.collection("BatteryLives")
                    };
                    next(null, BatteryLivesDB);
                }
            });
        } else {
            next(null, BatteryLivesDB);
        }
    };
    
    db.checkConnected = function () {
        
        db.getDB(function (err, db) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("connected to db!");
                
                //BatteryLivesDB.BatteryLives.insert({category:"Music Player",name:"Apple iPod Nano 7rd Generation",batterylife:"24", unit:"hours"}, function (err) {
                //    if (err) {
                //        console.log("Failed to insert battery life into database: " + err);
                //    }
                //});               

                //BatteryLivesDB.BatteryLives.update({},
                //          { $set : { "brand": "Apple" } },
                //          {
                //    upsert: false,
                //    multi: true
                //});
                
            }
        });
    };
    
    db.getCategories = function (next) {
        db.getDB(function (err, db) {
            if (err) {
                console.log(err);
            }
            else {
                BatteryLivesDB.BatteryLives.distinct("category", next);
            }
        });
    };

    db.getBrands = function (next) {
        db.getDB(function (err, db) {
            if (err) {
                console.log(err);
            }
            else {
                BatteryLivesDB.BatteryLives.distinct("brand", next);
            }
        });
    };

})(module.exports);