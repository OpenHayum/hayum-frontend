import express from "express";
import bodyParser from "body-parser";
import path from "path";
import debugLog from "debug";
import controllers from "./controllers";
import morgan from "morgan";
import https from "https";
import mongooseStart from "./config/mongo.config";
import fs from "fs";
import { port } from "./config/hayum.config";
import { notFound } from "./errors";

const debug = debugLog("HAYUM: server");
const app = express();

app.use(bodyParser.json());

app.use(morgan("combined"));
// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

const acmeChallenge = {
  "3lUgV7I6sAEoJnejPONqqEAiaXVbFWN83LEaAJ9-P7g":
    "3lUgV7I6sAEoJnejPONqqEAiaXVbFWN83LEaAJ9-P7g.LsVJrtWlEdYWJuhHixHq3g325IeBpFHPnNzyjp2RcL8",
  rf7rVkK4BnqivNPbP0qS71rTHC1qWiBvlvGQ9L7s_YQ:
    "rf7rVkK4BnqivNPbP0qS71rTHC1qWiBvlvGQ9L7s_YQ.LsVJrtWlEdYWJuhHixHq3g325IeBpFHPnNzyjp2RcL8",
  "XLmnl5_XKDwHgPoyL4b--sFfKhYh1zNnN9joGfeXTV8":
    "XLmnl5_XKDwHgPoyL4b--sFfKhYh1zNnN9joGfeXTV8.LsVJrtWlEdYWJuhHixHq3g325IeBpFHPnNzyjp2RcL8"
};
app.use("/.well-known/acme-challenge/:id", (req, res) => {
  res.contentType("text/plain");
  res.send(acmeChallenge[req.params.id]);
});

app.use("/api", controllers);

app.use("/", (req, res) => {
  const filePath = path.resolve(__dirname, "..", "build", "index.html");
  res.sendFile(filePath);
});

app.use((req, res, next) => {
  next(notFound());
});

if (app.get("env") === "development") {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

var options = {
  key: fs.readFileSync("./ssl/private.key"),
  cert: fs.readFileSync("./ssl/certificate.crt")
};

https.createServer(options, app).listen(process.env.PORT || 8000, error => {
  mongooseStart();
  if (error) {
    debug("error", error);
  }
  debug("Listening: ", port);
});
