const express = require("express");
const routes = require("./routes");

const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.use(compression());
app.use(helmet());

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 30, // 5 requests,
  })

app.use(limiter)

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port);