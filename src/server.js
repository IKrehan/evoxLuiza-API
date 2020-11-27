const express = require("express");
const routes = require("./routes");
const db = require('./database/index')

const cors = require('cors')
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

require('./database');

const app = express();
db.sync()

app.use(express.json());
app.use(routes);


const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // 5 requests,
})
app.use(limiter)

const corsOptions = {
  origin: "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
app.use(cors(corsOptions));
app.use(compression());
app.use(helmet());



let port = process.env.PORT || 5000;
app.listen(port);