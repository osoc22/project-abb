"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var createError = require("http-errors");
var express = require("express");
var path = require("path");
const fs = require("fs");
const cors = require("cors");
var app = express();
app.use(cors({
    origin: "*",
}));
app.set("view engine", "jade");
app.get("/*", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let gemeente = req.query["gemeente"];
            let query = req.params[0].split("/")[0] + "/" + req.params[0].split("/")[1];
            //  let query be the query string after the first ? in the url
            let data = yield JSON.parse(fs.readFileSync(`./formatted_data/${query}.json`));
            if (gemeente) {
                if (Array.isArray(gemeente)) {
                    let entries = [];
                    entries = gemeente.map((g) => {
                        return data.filter((e) => {
                            return e.Gemeente === g;
                        });
                    });
                    return res.json({ Response: entries });
                }
                else {
                    let entry = data.filter((e) => {
                        return e.Gemeente === gemeente;
                    });
                    console.log(entry);
                    console.log(gemeente);
                    return res.json({ Response: entry });
                }
            }
            return res.json({ Response: data });
        }
        catch (error) {
            console.log(error);
            return res.json({ Response: error });
        }
    });
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
