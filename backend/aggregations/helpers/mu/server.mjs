import httpContext from "express-http-context";
import express from "express";
import bodyParser from "body-parser";
import queryType from "query-types";

var app = express();

var bodySizeLimit = process.env.MAX_BODY_SIZE || "100kb";

// parse JSONAPI content type
app.use(
  bodyParser.json({
    type: function (req) {
      return /^application\/vnd\.api\+json/.test(req.get("content-type"));
    },
    limit: bodySizeLimit,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(queryType.middleware());

// set JSONAPI content type
app.use("/", function (req, res, next) {
  res.type("application/vnd.api+json");
  next();
});

app.use(httpContext.middleware);

app.use(function (req, res, next) {
  httpContext.set("request", req);
  httpContext.set("response", res);
  next();
});

const errorHandler = function (err, req, res, next) {
  res.status(err.status || 400);
  res.json({
    errors: [{ title: err.message }],
  });
};

// start server
app.listen(80, function () {
  console.log(`Starting server on port 80 in ${app.get("env")} mode`);
});

export default app;

export { app, errorHandler };
