import express from "express";
import bodyParser from "body-parser";
import path from "path";
import debugLog from "debug";
import controllers from "./controllers";
import morgan from "morgan";
import mongooseStart from "./config/mongo.config";
import { port } from "./config/hayum.config";
import { notFound } from "./errors";

const debug = debugLog("HAYUM: server");
const app = express();

app.use(bodyParser.json());

app.use(morgan("combined"));
// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

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

app.listen(process.env.PORT || port, error => {
  mongooseStart();
  if (error) {
    debug("error", error);
  }
  debug("Listening: ", port);
});
